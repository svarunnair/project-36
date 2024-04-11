import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { passData } from '../Redux/data/action';


function Detail() {
    const passData2=useSelector((store)=>store.data.passData)
    const dispatch=useDispatch()

    console.log("passData::",passData2)

  useEffect(()=>{
    dispatch(passData())
  },[])

  return (
    <div>Detail</div>
  )
}

export default Detail