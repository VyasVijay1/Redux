
const nameReducer = (state='',action) => {
    if(action.type ==='CHANGE_NAME'){
        return action.payload
    //     return //action.payload
    //    {
    //        ...state,
    //        name: action.payload
    //    }
   }
return state
}

export default nameReducer