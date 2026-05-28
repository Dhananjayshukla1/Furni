import { GET_CATEGORY_SUCCESS } from "../constant/Category.constant"

export const intialState ={
    categories:[]
}

export const categoryReducer = (state=intialState, action) =>{

    switch(action.type){
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                categories:[...action.payload]
            }
        default:
         return state
        }
     
}