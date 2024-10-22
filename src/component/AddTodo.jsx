import React, { useState } from 'react'

const AddTodo = (props) => {
    const list = props.list
   const setList = props.setList 
   
   const [newitem, setNewItem] = useState ("")

   const handleChange=(e)=>
   {
      setNewItem(e.target.value)
   }

   const handleAdd = () =>
   {
     setList([...list,{id:list.length+1,Activity:newitem}])
     setNewItem("")
   }
  return (
    <div className="flex flex-col gap-3">
    <h1 className="text-2xl font-medium">Manage Activities</h1>
    <div>
    <input value={newitem} onChange={handleChange} type="text" className=" border border-black bg-transparent p-1" placeholder='next activity' />
    <button onClick={handleAdd} className="bg-black text-white p-1 border border-black">Add</button>
    </div>
</div>
  )
}

export default AddTodo