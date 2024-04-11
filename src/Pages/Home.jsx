import { Box, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/data/action';

const OuterContainer = styled(Box)(({ theme }) => ({
  border:'2px solid red',
  // display:"flex",
  // justifyContent:"end",
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));

    const InnerContainer = styled(Box)(({ theme }) => ({
      border:'2px solid green',
      // display:"flex",
      // justifyContent:"end",
          [theme.breakpoints.down("xl")]: {},
          [theme.breakpoints.down("lg")]: {},
          [theme.breakpoints.down("md")]: {},
          [theme.breakpoints.down("sm")]: {},
          [theme.breakpoints.down("xs")]: {},
        }));


        const ImageBox = styled(Box)(({ theme }) => ({
          border:'2px solid green',
          // display:"flex",
          // justifyContent:"end",
              [theme.breakpoints.down("xl")]: {},
              [theme.breakpoints.down("lg")]: {},
              [theme.breakpoints.down("md")]: {},
              [theme.breakpoints.down("sm")]: {},
              [theme.breakpoints.down("xs")]: {},
            }));
    



function Home() {

const mainData=useSelector((store)=>store.data.getDataReducer)||[]
const [content,setContent]=useState('')
const dispatch=useDispatch()


console.log("mainData",mainData)

let data="car"

useEffect(()=>{
  dispatch(getData(data))
},[])


useEffect(()=>{
  
   setContent(mainData)
},[mainData])


console.log("Mainnn",mainData.items)

console.log("dataaaaaaaaaaaaa..",content?.items)

  
  return (
    <OuterContainer>

      <InnerContainer>


<InnerContainer as={"img"} src=""/>


  
       

       


      </InnerContainer>
    </OuterContainer>
  )
}

export default Home