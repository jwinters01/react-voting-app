import { useState } from "react"
import { useBallotRedux } from "../hooks/useBallotRedux"


export const Ballot = () => {

  const {
    questions,
    electionName,
    castVote,
  } = useBallotRedux()

  const [checks, setChecks] = useState(new Array(questions.length).fill(false))

  const handleOnChange = (idx) => {
    setChecks(
      checks.map((c, i) => i === idx ? !c : c)
    )
  }

  const handleCastVote = (checks) => {
    const results = questions.map((q, i) => ({
      id: q.id,
      checked: checks[i]
    }))
    castVote(results);

  }



  /*
  props in questions
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

  castVote results
  [
    {
      id: 1,
      checked: true
    },
    {
      id: 2,
      checked: false
    }
  ]
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

      <button type="button" onClick={handleCastVote}>Cast Vote</button>
    </>
  )
}