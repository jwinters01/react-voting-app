import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"

import { refreshElections } from "../actions/mainMenuActions"

const DEFAULT_ERROR_STATE = ""

export const useBallotsList = () => {
    const elections = useSelector(state => state.elections)
    const [error, setError] = useState(DEFAULT_ERROR_STATE)

    const dispatch = useDispatch()
    useEffect(() => dispatch(refreshElections()), [dispatch])
    return {
        elections,
        error,
        setError
    }
}