import React from "react";
export default function MyWidth(){
   var size={
    width: 250,
    height: 100
   }
   return(
    <div>
        <h2>Property Binding</h2>
        <table border="1" width={size.width}>
            <tr>
                <td>Welcome to Codeograph</td>
            </tr>
        </table>
    </div>
   )
   
}
 