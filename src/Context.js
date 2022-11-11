import React from "react"; 
//import { createContext } from "react";
import { useReducer } from "react"; 
//import { Reducer } from "react"; 
import reducer from "./reducer";
//we need to import the useContext Hook 
import { useContext } from "react";
//create a context(similar to a warehouse to store all data) 
const AppContext=React.createContext(); //warehouse created  


//create a provider to seek access to all the data from warehouse(children)  

//state management for home page 

const initialState={  //state 

    name:"",
    image:"", 
    text:""

} 
const AppProvider=({children}) =>{ 
    const HomePage=()=>{
        return dispatch({ //new updated state
            type:"HOME", //use in switch statements later  
            payload:{
                name:"FLORENCE'S WEBSITE", 
                image:"IMAGE 1", 
                text:"Hi I am a front-end developer and the tech-stacks I use are react,HTML,Javascript and Bootstrap"
            }
        },[])
    } 
    //state management for about page 
    const AboutPage=()=>{
        return dispatch({
            type:"ABOUT",
            payload:{
                name:"Florence Red" ,
        image:'IMAGE 2',
        text:"I am a sophomore student studying in VIT Chennai"
            }
        })
    }
    const [state,dispatch]=useReducer(reducer,initialState); //reducer is a function,state is the present sate and intial state is the pre defined state 
    <AppContext.Provider value={{...state,HomePage,AboutPage}}>{children}</AppContext.Provider>
}  


//create a consumer using useContext Hook  
//mould a function to create a custom hook 
const GlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,GlobalContext};
