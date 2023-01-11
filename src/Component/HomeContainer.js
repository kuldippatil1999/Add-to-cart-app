import React from 'react'
import list from '../Data'
import Card from '../Component/Card'
function HomeContainer({handleClick}) {
  
  return (
    <>
      { list.map((item)=><Card key={item.id} item={item} handleClick={handleClick}/>)}
    </>
  )
}

export default HomeContainer