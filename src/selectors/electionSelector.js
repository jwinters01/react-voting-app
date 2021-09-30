

export const electionSelector = (id) => {
  return state => state.elections.find(e => e.id === id)
}