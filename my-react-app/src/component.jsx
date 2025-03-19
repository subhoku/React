import React,{useState} from "react";

function Hello(){
    //using state and hook
    const[message,setMessage]= useState("Welcome to Codeograph");
    return(
        <div>
            <h1>{message}{"Today"}</h1>
        </div>
    )
}
export default Hello;