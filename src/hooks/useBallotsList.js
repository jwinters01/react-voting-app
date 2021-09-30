import { useSelector } from "react-redux"

export const useBallotsList = () => {
    const elections = useSelector(state => state.elections)

    return {
        elections
    }
}