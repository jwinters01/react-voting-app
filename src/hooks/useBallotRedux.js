import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from 'react';

import { useParams } from "react-router"

import { electionSelector } from "../selectors/electionSelector";

export const useBallotRedux = () => {
  
  // election id from /ballots/:id
  const {id} = useParams();
  
  const {questions, electionName} = useSelector(electionSelector(id));
  
  const dispatch = useDispatch();
  
  const actions = useMemo(() => bindActionCreators({
    castVote: castVoteThunk,
  }, dispatch), [dispatch]);
  

  // useEffect(() => dispatch(refreshElectionsThunk()), [dispatch])
  
  return {
    questions,
    electionName,
    ...actions
  }
  
}