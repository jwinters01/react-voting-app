import { useState } from "react"
import { useBallotRedux } from "../hooks/useBallotRedux"


export const Ballot = () => {

  const {
    questions = [],
    electionName = "",
    electionId,
    voterId,
    castVote,
    backToMain,
  } = useBallotRedux()

  // NOTE: How to improve ?
  // the array length depends on the data and the state is created as soon as the component renders, but useEffect runs at last to retrieve the data
  // const [checks, setChecks] = useState(new Array(questions.length).fill(false))

  const [checks, setChecks] = useState([])

  if (checks.length===0) {
    setChecks(new Array(questions.length).fill(false))
  }

  const handleOnChange = (idx) => {
    setChecks(
      checks.map((c, i) => i === idx ? !c : c)
    )
  }

  const handleCastVote = (checks) => {

    // [t, f, t, f] => [1, null, 7, null] => [1, 7]
    const results = checks.map((c, i) => c ? questions[i].id : null).filter(n => n !== null)
    castVote(electionId, voterId, results);
    backToMain()
  }



  /*
  questions of the election
  [
    {
      id: 1,
      item: xxx
    },
    {
      id: 2,
      item: xxx
    }
  ]
  
  checks
  [true, false]

  castVote results -  which question user selected yes and we should increment 1
  [questionId, questionId]
  */
  return (
    <>
      <h2>Ballot for {electionName}</h2>
      <ul>
        {
          questions.map(({ item }, idx) => (
            <li key={idx}>
              <input
                type="checkbox"
                id={`question-${idx}`}
                name={item}
                value={item}
                checked={checks[idx]}
                onChange={() => handleOnChange(idx)}
              />
              <label htmlFor={`question-${idx}`}>{item}</label>
            </li>
          ))
        }
      </ul>

      <button type="button" onClick={() => handleCastVote(checks)}>Cast Vote</button>
    </>
  )
}