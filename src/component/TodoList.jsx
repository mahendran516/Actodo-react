import React, { useState } from 'react'

const TodoList = (props) => {
   const list = props.list
   const setList = props.setList 

const handleDelete=(remove)=>
{
    var tempary= list.filter(function(item){
        if(item.id === remove)
        {
            return false
        }
        else{
            return true
        }
    })
    setList(tempary)
}
  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
    <h1 className="text-2xl font-medium">Today Activity</h1>
    {list.length===0?<p>you haven't added anything yet</p>:""}
    {
       list.map(function(item,index){
          return  <div className="flex justify-between">
            <p>{index+1}.{item.Activity}</p>
            <button onClick={()=>handleDelete(item.id)}>delete</button>
            </div>
        })
    }
</div>
  )
}

export default TodoList