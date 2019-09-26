import React from 'react'
import { connect } from 'react-redux'
import {voteFor} from '../reducers/anecdoteReducer'

const Anecdotes = ( props ) => {
  const handleVote = id => {
    const anecdote = props.visibleAnecdotes.find(a => a.id === id)
    props.voteFor(anecdote, 1)
  }

  return (
    <div>
      {props.visibleAnecdotes.map(anecdote => 
      
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

const anecdotesToShow = ({anecdotes, filter}) => {
  return anecdotes.filter(anecdote => 
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  )
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteFor
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Anecdotes)
export default ConnectedAnecdotes

