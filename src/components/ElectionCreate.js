import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useFormArray } from "../hooks/useFormArray";

export const ElectionCreate = () => {

  // const { onSubmitElection } = useElectionCreate()

  const [name, setName] = useState('')

  const [questions, setQuestions] = useFormArray([])
  
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={setName}
          name="name"
        />
      </div>

{/* NOTE: how to render array of question inputs */}
      {/* <ul>
        {
          
        }
      </ul> */}
      
      <div>
        <label htmlFor="question1">Questoin 1</label>
        <input
          type="text"
          id="question1"
          value={questions[0]}
          onChange={setQuestions}
          name="model"
        />
      </div>
      <div>
        <label htmlFor="question2">Questoin 2</label>
        <input
          type="text"
          id="question2"
          value={questions[1]}
          onChange={setQuestions}
          name="year"
        />
      </div>
      
      <button type="button" onClick={() => {}}>
        Submit
      </button>
    </form>
  )
}