import React from "react";
import { LoginForm } from "./fields";
import Buttons from "./button";
import Header from "./header";

export default function ComponentBinding(){
    return(
        <div>
        <Header/>
        <LoginForm/>
        <Buttons/>
        </div>
    )
}