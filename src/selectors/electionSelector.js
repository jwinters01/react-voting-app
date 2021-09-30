

export const electionSelector = (id) => {
  return state => state.elections.find(e => e.id === id)
}

export const questionCountSelector = (electionId, questionId) => {
  return state => electionSelector(electionId)(state).questions.find(q => q.id === questionId).count
}