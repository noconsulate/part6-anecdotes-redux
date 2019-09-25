import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

const NewAnecdote = (props) => {
  const addNew = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const anecdote = await anecdoteService.createNew(content)
    props.createAnecdote(anecdote)
    console.log(anecdote)
  }


  return (
    <div>
      <h2> Create New </h2>
      <form onSubmit={addNew}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createAnecdote,
}

const ConnectedNewAnecdote = connect(
  null,
  mapDispatchToProps,
)(NewAnecdote)

export default ConnectedNewAnecdote