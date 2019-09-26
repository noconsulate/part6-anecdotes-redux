import anecdoteService from '../services/anecdotes'


const sortByVotes = (a, b) => 
  a.votes < b.votes ? 1 : -1

export const asObject = (anecdote) => {
  return {
      content: anecdote,
      votes: 0
  }
}

export const voteFor = anecdote => {
  return async dispatch => {
    const newObject = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const response = await anecdoteService.voteFor(anecdote.id, newObject)
    console.log(response.id)
    dispatch({
      type: 'VOTE',
      data: {id: response.id}
    })
  }
}

/*
export const voteFor = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}
*/

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW',
      data: newAnecdote,
    })
  }
}

export const initializeAnecdotes = anecdotes => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes,
    })
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