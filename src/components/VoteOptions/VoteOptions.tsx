import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
    canReset: boolean;
    onReset : () => void;
    onVote: (vote: VoteType) => void;
}

export default function VoteOptions({canReset, onReset, onVote}:VoteOptionsProps) {
    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => {onVote('good')}}>Good</button>
            <button className={css.button} onClick={() => {onVote('neutral')}}>Neutral</button>
            <button className={css.button} onClick={() => {onVote('bad')}}>Bad</button>
            {canReset && <button className={`${css.button} ${css.reset}`}  onClick={onReset}>Reset</button>}
        </div>

    );
}