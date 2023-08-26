import SnippetCard from './SnippetCard'

export default function App() {
  const data = {
    title: 'Title',
    date: 'Aug 26, 2023'
  }
  return (
    <div className="App">
      <SnippetCard data={data} />
    </div>
  );
}