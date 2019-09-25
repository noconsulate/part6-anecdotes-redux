import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/Anecdotes'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {
  useEffect (() => {
    anecdoteService.getAll().then(anecdotes => props.initializeAnecdotes(anecdotes))
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification  />
      <Anecdotes />
      <AnecdoteForm />
    </div>
  )
}

export default connect(null, { initializeAnecdotes })(App)
