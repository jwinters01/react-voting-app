import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

import { refreshElections } from "../actions/mainMenuActions"

export const useBallotsList = () => {
    const elections = useSelector(state => state.elections)

    const dispatch = useDispatch()
    useEffect(() => dispatch(refreshElections()), [dispatch])
    return {
        elections
    }
}