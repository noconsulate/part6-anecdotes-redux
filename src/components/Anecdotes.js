import React from 'react'
import {voteFor} from '../reducers/anecdoteReducer'
import {changeNotification, stopNotification} from '../reducers/notificationReducer'



const Anecdotes = ( {store} ) => {
  const handleVote = id => {
    store.dispatch(voteFor(id))
    const anecdote = store.getState().anecdotes.find(a => a.id === id)
    .content
    store.dispatch(changeNotification(anecdote))
    setTimeout(() => {
      store.dispatch(stopNotification())
    }, 5000)
  }

  const {anecdotes, filter} = store.getState()
  const anecdotesToShow = () => {
    console.log(anecdotes)
    return anecdotes.filter(anecdote => anecdote.content.includes(filter.toLowerCase()))
  }

  return (
    <div>
      {anecdotesToShow().map(anecdote => 
      
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => 
              handleVote(anecdote.id)}>vote</button>
          </div>
        </div>

        )}
    </div>
  )
}

export default Anecdotes

