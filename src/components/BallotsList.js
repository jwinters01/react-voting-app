import { useBallotsList } from "../hooks/useBallotsList"
import { BallotListItem } from "./BallotListItem"

export const BallotsList = () => {
    const {elections} = useBallotsList()
    console.log(elections)
    const validateVoter = (voterId, electionId) => {
        const election = elections.filter(election => election.id === electionId)[0]
        return election.includes(voterId)
    }

    return (
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
    )
}