import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { VotersTable } from "../components/VotersTable";
import {  useEffect } from "react";

import {
  createSortVotersAction,
  refreshVoters,
} from "../actions/mainMenuActions";

export const VoterTableContainer = () => {
  const voters = useSelector((state) => {
    const { voters } = state;
    const { col: sortCol, dir: sortDir } = state.voterSort;

    return [...voters].sort((a, b) => {
      if (a[sortCol] === b[sortCol]) {
        return 0;
      } else {
        if (a[sortCol] < b[sortCol]) {
          return sortDir === "asc" ? -1 : 1;
        } else {
          return sortDir === "desc" ? -1 : 1;
        }
      }
    });
  });

  const voterSort = useSelector((state) => state.voterSort);

  const actions = bindActionCreators(
    {
      onSortVoters: createSortVotersAction,
    },
    useDispatch()
  );
  const dispatch = useDispatch();

  useEffect(() => dispatch(refreshVoters()), [dispatch]);

  return <VotersTable voters={voters} voterSort={voterSort} {...actions} />;
};
