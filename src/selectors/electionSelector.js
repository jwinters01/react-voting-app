

export const electionSelector = (id) => {
  return state => {
    const elections = state.elections
    return elections.find( e => e.id === parseInt(id) ) || {}
  }
}

// export const questionCountSelector = (electionId, questionId) => {
//   return state => electionSelector(electionId)(state).questions.find(q => q.id === questionId).count
// }