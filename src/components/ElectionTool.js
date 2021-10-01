import { useElections } from "../hooks/useElections"
import { ElectionResultsTable } from "./ElectionResultsTable"

export const ElectionTool = () => {
    const {elections} = useElections()
    return (
        <>
        {elections.map(election => {
            return(
                <ElectionResultsTable key={election.id} 
                    electionName={election.name}
                    questions={election.questions}
                    responseCount={election.voterIds.length} />
            )
        })}
        </>
    )
}