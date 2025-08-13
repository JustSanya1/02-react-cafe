import { useState } from 'react'

import css from './App.module.css'
import CareInfo from '../CareInfo/CafeInfo'
import type { Votes } from "../../types/votes"
import VoteOptions from '../VoteOptions/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'
import Notification from '../Notification/Notification'



function App() {

  const [votesState, addVote] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  })
  const  totalVotes = votesState.good + votesState.neutral + votesState.bad;
  const  positiveRate = totalVotes
    ? Math.round((votesState.good / totalVotes) * 100)
    : 0;


  function handleVote(key: keyof Votes): void{
    addVote({
      ...votesState,
        [key]: votesState[key] + 1,
      })
  }

  function resetVotes():void {
    addVote({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };


  return (
    <div className={css.app}>
      <CareInfo />
      <VoteOptions onVote={handleVote} canReset={totalVotes > 0} onReset={resetVotes} />
      {totalVotes ? <VoteStats votes={votesState} totalVotes={totalVotes} positiveRate={positiveRate} /> : <Notification />}
    </div>
  )
}

export default App
