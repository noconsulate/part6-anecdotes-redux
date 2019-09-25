
const getId = () => (100000 * Math.random()).toFixed(0)

const sortByVotes = (a, b) => 
  a.votes < b.votes ? 1 : -1

export const asObject = (anecdote) => {
  return {
      content: anecdote,
   //   id: getId(),
      votes: 0
  }
}

export const voteFor = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW',
    data: asObject(content)
  }
}

export const initializeAnecdotes = anecdotes => {
  return {
    type: 'INIT',
    data: anecdotes
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(a =>
        a.id !== id ? a : changedAnecdote)
        .sort(sortByVotes)
      case 'NEW':
        return [...state, action.data]
        .sort(sortByVotes)
      case 'INIT':
        return action.data
        .sort(sortByVotes)

    default:
  }

  return state.sort(sortByVotes)
};

export default anecdoteReducer