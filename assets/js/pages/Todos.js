import React from 'react'
import { useEffect, useState } from 'react'
import { getTodosByObjectAndType } from '../api/Todos'
import TodosPart from '../components/TodosPart'
import {CircularProgress} from '@material-ui/core'

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const todosList = await getTodosByObjectAndType()
      if (!todosList.error) {
        setTodos(todosList.data)
        setLoading(false)
      }

    }
    fetchData()
  }, [])

  return (
      loading ? <CircularProgress/> : Object.entries(todos).map(([key, item]) => (
      <TodosPart key={key} title={key} data={item} />
  ))
  )
}