import { useEffect, useState } from 'react'
import SnippetCard from './components/SnippetCard'
import { SnippetType } from './types'
//imported by JSmith, 08/29/23
import TestForm from './components/TestForm'

export default function App() {
  const [snippets, setSnippets] = useState<SnippetType[]>([])
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    fetch('/api/snippets')
      .then(r => r.json())
      .then(d => setSnippets(d))
  }, [])

  const filteredSnippets = snippets.filter(s => s.content.match(filter))
  return (
    <div className="App">
     */Test Form added by JS 08/29/23/*
      <TestForm/>
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