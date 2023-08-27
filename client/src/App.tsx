import SnippetCard from './SnippetCard'
import {DataType} from './types'

export default function App() {
  const data: DataType ={
    title: 'Title',
    date: 'Aug 26, 2023'
  }
  return (
    <div className="App">
      <SnippetCard data={data} />
    </div>
  );
}