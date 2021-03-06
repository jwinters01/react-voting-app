import { useBallotsList } from "../hooks/useBallotsList"
import { BallotListItem } from "./BallotListItem"
import { useHistory } from 'react-router-dom';

export const BallotsList = () => {
    const {elections, error, setError, resetError, inputVoterId} = useBallotsList()
    // const [_, setValidatedBallot] = useState(null)
    const history = useHistory();

    const validateVoter = (voterId, electionId) => {
        const election = elections.filter(election => election.id === electionId)[0] 
        if (!election.voterIds.includes(voterId)){
            resetError()
            // setValidatedBallot(electionId)
            history.push(`/ballots/${electionId}`);
            inputVoterId(voterId);
        }else{
            setError("Invalid Voter ID")
        }
    }
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