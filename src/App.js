import React from 'react';
import {asObject} from './reducers/anecdoteReducer'

const App = (props) => {
  const anecdotes = props.store.getState()

  const vote = (id) => {
    console.log('vote', id)
    props.store.dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  const addNew = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    console.log('add new', asObject(anecdote))
    props.store.dispatch({
      type: 'NEW',
      data: asObject(anecdote)
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App