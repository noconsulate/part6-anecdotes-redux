import createAnecdote from '../reducers/anecdoteReducer'

const NewAnecdote = (props) =>



const addNew = (event) => {
  event.preventDefault()
  const anecdote = event.target.anecdote.value
  props.store.dispatch(
    createAnecdote(anecdote)
  )
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