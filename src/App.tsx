import { useState } from 'react'
import './App.css'
import { server } from '../mock/index';
import { rulesClient } from './lib/modules/index';
import { Table } from './components/Table';

rulesClient
server

function App() {
  const [] = useState(0)

  return (
    <Table/>
  )
}

export default App
