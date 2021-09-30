
import { VotersTable} from '../components/VotersTable';
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from 'react';



const votersList = [
  {id:1 , firstName: 'adam' , lastName: 'red',address:'2322 south street ',city:"Boston",birthDate: "12/12/2007",email:"mail@gmail.com",phone:"987333"},
  {id:2 , firstName: 'roy' , lastName: 'R',address:'2322 west street ',city:"NYC",birthDate: "2/2/2001",email:"R@gmail.com",phone:"74747474"}
] 


export const VoterTool = () => {

  const voters = useSelector(state => {

    const { cars } = state;
    const { col: sortCol, dir: sortDir }= state.carsSort;

    return [ ...cars ].sort((a,b) => {
      if (a[sortCol] === b[sortCol]) {
        return 0;
      } else {
        if (a[sortCol] < b[sortCol]) {
          return sortDir === 'asc' ? -1 : 1;
        } else {
          return sortDir === 'desc' ? -1 : 1;
        }
      }
    })
  });
  const carsSort = useSelector(state => state.carsSort);
  const actions = useMemo(() => bindActionCreators({
    onSortVoters: createSortVoterAction,
  }, useDispatch());



  return (  
      <VotersTable voters = {votersList} voterSort={voterSort}  {...actions} />
  );
};

