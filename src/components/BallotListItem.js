import { useState } from "react"

export const BallotListItem = ({ electionName, voterIdPromptText, voteButtonText, validateVoter }) => {
    const [idInput, setIdInput] = useState("")

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
            <button type="button" onClick={() => validateVoter(parseInt(idInput, 10))} >
                {voteButtonText}
            </button>
        </li>
    )
}