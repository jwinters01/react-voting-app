import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from 'react';
import { useParams } from "react-router"
import { refreshElections } from "../actions/mainMenuActions";
import { useHistory } from 'react-router-dom';

import { electionSelector } from "../selectors/electionSelector";
import { castVoteThunk } from "../actions/electionActions";

export const useBallotRedux = () => {
  const dispatch = useDispatch()


  // election id from /ballots/:id
  const { id: electionId } = useParams();

  const election = useSelector(electionSelector(electionId));

  const voterId = useSelector(state => state.voterId)

  const { questions, name: electionName } = election;


  const actions = useMemo(() => bindActionCreators({
    castVote: castVoteThunk,
  }, dispatch), [dispatch]);

  const history = useHistory();

  const backToMain = () => {
    history.push(`/`);
  }

  useEffect(
    () => {
      dispatch(refreshElections())
    }
    , [dispatch])

  return {
    questions,
    electionName,
    electionId,
    voterId,
    backToMain,
    ...actions
  }

}