import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { testData } from '../Redux/data/action'

function About() {

    const mainData=useSelector((store)=>store.data.testData)
    const dispatch=useDispatch()

    console.log("data",mainData)


    useEffect(()=>{
       dispatch(testData())
    },[])

    
  return (
    <div>About
    {mainData.data.map((item)=>(
        <>
            {item.id}
        </>
    ))}
    </div>
  )
}

export default About