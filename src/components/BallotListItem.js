import { useState } from "react"

export const BallotListItem = ({ electionName, voterIdPromptText, voteButtonText, validateVoter }) => {
    const [idInput, setIdInput] = useState("")
    const handleAttemptOpenBallot = () => {
        console.log("cast ballot")
        if (validateVoter(idInput)){
            // Route to Ballot
        } else {
            // render error message
        }
    }

    const change = e => {
        setIdInput(e.target.value)
    }

    return (
        <li>
            <div>{electionName}</div>
            <label>
                {voterIdPromptText}
                <input type="text" value={idInput} onChange={change}></input>
            </label>
            <button type="button" onClick={handleAttemptOpenBallot} >
                {voteButtonText}
            </button>
        </li>
    )
}