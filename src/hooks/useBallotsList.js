import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect, useMemo } from "react"
import { createSetErrorAction, createResetErrorAction, createInputVoterIdAction } from "../actions/mainMenuActions"

import { refreshElections } from "../actions/mainMenuActions"
import { bindActionCreators } from "redux"


export const useBallotsList = () => {
    const [elections, error] = useSelector(state => [state.elections, state.error])
    

    const dispatch = useDispatch()

    useEffect(() => dispatch(refreshElections()), [dispatch])

    const actions = useMemo(() => bindActionCreators({
        setError: createSetErrorAction,
        resetError: createResetErrorAction,
        inputVoterId: createInputVoterIdAction,
    }, dispatch), [dispatch])

    return {
        elections,
        error,
        ...actions
    }
}