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


<InnerContainer as={"img"} src="https://media.evo.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1581606140/evo/2020/02/Ford%20Mustang%20Mach%201-5.jpg"/>


  
       

       


      </InnerContainer>
    </OuterContainer>
  )
}

export default Home