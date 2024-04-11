import axios from "axios"



export const GET_DATA_REQUIEST="GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"

export const GET_TEST_REQUEST="GET_TEST_REQUEST"
export const GET_TEST_SUCCESS="GET_TEST_SUCCESS"
export const GET_TEST_FAILURE="GET_TEST_FAILURE"

export const GET_PASS_REQUEST="GET_PASS_REQUEST"
export const GET_PASS_SUCCESS="GET_PASS_SUCCESS"
export const GET_PASS_FAILURE="GET_PASS_FAILURE"


const getDataRequiest=()=>{
    return({
        type:GET_DATA_REQUIEST
    })
}
const getDataSuccess=(data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}
const getDataFailure=()=>{
    return({
        type:GET_DATA_FAILURE
    })
}



const getPassRequest=()=>{
    return({
        type:GET_PASS_REQUEST
    })
}
const getPassSuccess=(data)=>{
    return({
        type:GET_PASS_SUCCESS,
        payload:data
    })
}
const getPassFailure=()=>{
    return({
        type:GET_PASS_FAILURE
    })
}


const getTestRequest=()=>{
    return({
        type:GET_TEST_REQUEST
    })
}
const getTestSuccess=(data)=>{
    return({
        type:GET_TEST_SUCCESS,
        payload:data
    })
}
const getTestFailure=()=>{
    return({
        type:GET_TEST_FAILURE
    })
}



export const getData=(data)=>(dispatch)=>{
    dispatch(getDataRequiest())
    return axios({
        url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${data}&key=AIzaSyBYEsMKy1zlHF-8Io9O9xiUn3GJcOyTh5o`,
        method:"GET",
        
    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
        console.log("res.data",res.data)
    })
    .catch((error)=>{
        dispatch(getDataFailure())
    })
}


export const testData=()=>(dispatch)=>{
    dispatch(getTestRequest())
    return axios({
        url:"https://reqres.in/api/users?page=2",
        method:"GET"
    })
    .then((res)=>{
   
        dispatch(getTestSuccess(res.data))
        console.log("res.data.....",res.data)
    })
    .catch((err)=>{
        dispatch(getTestFailure(err))
    })
}



export const passData=()=>(dispatch)=>{
    let data = "Test"
    dispatch(getPassRequest())
    
    dispatch(getPassSuccess(data))

    dispatch(getPassFailure())
}