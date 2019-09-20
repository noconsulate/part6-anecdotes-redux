import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/Anecdotes'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = (props) => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter store={props.store} />
      <Notification store={props.store} />
      <Anecdotes store={props.store} />
      <AnecdoteForm store={props.store} />
    </div>
  )
}

export default App