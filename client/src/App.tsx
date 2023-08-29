import { useEffect, useState } from 'react'
import SnippetCard from './components/SnippetCard'
import { SnippetType, UserType } from './types'

import TestForm from './components/TestForm'
import { text } from 'stream/consumers'

export default function App() {
  const [snippets, setSnippets] = useState<SnippetType[]>([])
  const [filter, setFilter] = useState<string>('')
  const [users, setUsers] = useState<UserType[]>([])


  useEffect(() => {
    fetch('/api/snippets')
      .then(r => r.json())
      .then(d => setSnippets(d))
  }, [])

  //Adds newly added user to stateful users object
  const handleAddNewUser = (name: string, email: string ) => {
    const newUser = { id: Math.random(), name: name, email:email}
    setUsers((prevUsers) => [...prevUsers, newUser])
    
  }
  console.log(users)
  const filteredSnippets = snippets.filter(s => s.content.match(filter))
  return (
    <div className="App">
      <TestForm addUser={handleAddNewUser}/>
      <form>
        <label>Search:</label>
        {filteredSnippets.length} / {snippets.length} match
        <br></br>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.currentTarget.value)}
          type='text'
          value={filter}>
        </input>
      </form>
      {filteredSnippets.map(s => <SnippetCard key={s.id} snippet={s} />)}
    </div>
  );
}