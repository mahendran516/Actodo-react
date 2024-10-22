import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/Header'
import Card from '../component/Card'
import TodoContainer from '../component/TodoContainer'



const Landing = () => {
  const data = useLocation()
  return (
    <div className="bg-black p-16">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
      <Header username={data.state.user}></Header>
      <div className="flex justify-between my-5 flex-grow gap-7 flex-wrap">
       <Card bgcolor={"#8272D2"} title={"23"} subtitle={"Chennai"}/>
       <Card bgcolor={"#FD6663"} title={"Decmeber"} subtitle={"11:11:11"}/>
       <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
      </div>
     <TodoContainer />
    </div>
  </div>

  )
}

export default Landing