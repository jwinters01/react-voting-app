import { useState } from "react"
import { useBallotsList } from "../hooks/useBallotsList"
import { BallotListItem } from "./BallotListItem"

export const BallotsList = () => {
    const {elections, error, setError} = useBallotsList()
    const [_, setValidatedBallot] = useState(null)
    console.log(elections)
    const validateVoter = (voterId, electionId) => {
        const election = elections.filter(election => election.id === electionId)[0] 
        if (election.voterIds.includes(voterId)){
            setError("")
            setValidatedBallot(electionId)
        }else{
            console.log("invalid voter ID")
            setError("Invalid Voter ID")
        }
    }
    console.log(`error: ${error}`)
    return (
        <>
            {error && <div className="error">{error}</div>}
            <ul>
                {elections.map(election => {
                    return (
                        <BallotListItem 
                            key={election.id} 
                            electionName={election.name} 
                            voterIdPromptText="Voter Id"
                            voteButtonText="Vote"
                            validateVoter={voterId => validateVoter(voterId, election.id)} />
                    )
                })}
            </ul>
        </>
    )
}