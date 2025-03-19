import React, {Component} from "react";

class HelloWorld extends Component{
//state to store the data
state={
    message : "Welcome to codeograph"
};
render(){
    return(
        <div>
            <h1>{this.state.message}</h1>
        </div>
    )
}


}
export default HelloWorld;