 const reducer =(state,action)=>{
    if(action.type==="HOME"){
        return {
            ...state, 
            name:action.payload.name,
            image:action.payload.image, 
            text:action.payload.text
        };
    } 
    else if(action.type==="ABOUT"){
        return {
            ...state, 
            name:action.payload.name,
            image:action.payload.image, 
            text:action.payload.text
        };
    } 
    return state;
} 
export default reducer