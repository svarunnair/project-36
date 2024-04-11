import { GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, GET_PASS_FAILURE, GET_PASS_REQUEST, GET_PASS_SUCCESS, GET_TEST_FAILURE, GET_TEST_REQUEST, GET_TEST_SUCCESS } from "./action"




const initState={
    isError:false,
    isLoading:false,
    getDataReducer:[],
    testData:[],
    passData:"",

}

export const dataReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_DATA_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true,
            })
            case GET_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    getDataReducer:action.payload
                })
                case GET_DATA_FAILURE:
                return({
                    ...state,
                    isError:true,
                    isLoading:false,
                })




                case GET_TEST_REQUEST:
                    return({
                        ...state,
                        isError:false,
                        isLoading:true
                    })
                    case GET_TEST_SUCCESS:
                        return({
                            ...state,
                            isError:false,
                            isLoading:false,
                            testData:action.payload
                        })
                        case GET_TEST_FAILURE:
                            return({
                                ...state,
                                isError:true,
                                isLoading:false
                            })


                            case GET_PASS_REQUEST:
                    return({
                        ...state,
                        isError:false,
                        isLoading:true
                    })
                    case GET_PASS_SUCCESS:
                        return({
                            ...state,
                            isError:false,
                            isLoading:false,
                            passData:action.payload
                        })
                        case GET_PASS_FAILURE:
                            return({
                                ...state,
                                isError:true,
                                isLoading:false
                            })



                default:
                    return({
                        ...state
                    })

    }
}