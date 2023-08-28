import { useEffect, useState } from 'react'
import SnippetCard from './components/SnippetCard'
import {SnippetType} from './types'

export default function App() {
  const [snippets, setSnippets] = useState<SnippetType[]>([])

  useEffect(() => {
    fetch('/api/snippets')
    .then(r => r.json())
    .then(d => setSnippets(d))
  },[])

  return (
    <div className="App">
      {snippets.map(s => <SnippetCard key={s.id} snippet={s} />)}
      
    </div>
  );
}