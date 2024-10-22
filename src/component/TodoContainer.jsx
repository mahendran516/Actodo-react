import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'




const TodoContainer = () => {

  const[list, setList] = useState([
    {
    id:1,
    Activity:"Go for cricket"
    },
    {
        id:2,
        Activity:"Go for cricket"
        },
        {
            id:3,
            Activity:"Go for cricket"
            },
])
  return (
    <div>
        <div className="flex gap-5 flex-wrap">
         <AddTodo list={list} setList={setList}/>
         <TodoList list={list} setList={setList} />
        </div>
    </div>
    

  )
}

export default TodoContainer