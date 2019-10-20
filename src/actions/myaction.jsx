

// export const anotherName = (name) => {
//     return {
//         type:'CHANGE_NAME', 
//         payload:name
//     }
// }

//Synchronous method
export const anotherName = () => {
    return (dispatch) => {
        fetch('http://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .then(res2 => {dispatch({type:'CHANGE_NAME',payload:res2[0].name})})
    }
}

//async Method
// export const anotherName = () => {
//     return async (dispatch) => {
        
//         const data = await fetch('http://jsonplaceholder.typicode.com/users/')
//         const res2 = await data.json()
//         dispatch({type:'CHANGE_NAME',payload:res2[0].name})
//     }
// }
