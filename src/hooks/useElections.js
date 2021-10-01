import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { refreshElections } from "../actions/mainMenuActions"


export const useElections = () => {
    const [elections] = useSelector(state => [state.elections])

    const dispatch = useDispatch()

    useEffect(() => dispatch(refreshElections()), [dispatch])

    return {
        elections
    }
}