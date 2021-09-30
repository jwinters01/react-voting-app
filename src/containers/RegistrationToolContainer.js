import { addForm } from "../actions/mainMenuActions";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from 'react';
import { RegistrationTool } from '../components/RegistrationTool';

  export const RegistrationToolContainer = () => {

    const dispatch = useDispatch();

    const actions = useMemo(() => bindActionCreators({
         addForm,
    }, dispatch), [dispatch]);

  return <RegistrationTool {...actions} />;
};
