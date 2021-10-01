
export const ElectionResultsTable = ({electionName, questions, responseCount}) => {
    return (
        <>
            <label>{electionName}</label>
            <table>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>% yes</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map(question => {
                        console.log(`question: ${question.item}\nquestion count: ${question.count}\nresponse count: ${responseCount}`)
                        return (
                            <tr key={question.id}>
                                <td>{question.item}</td>
                                <td>{responseCount===0?"N/A":(question.count / responseCount).toPrecision(2)*100}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}