import React from "react";
export default function DataBindingComponent(){
    var categories=["All","electronics","Footwear"];
    return(
        <div>
            <h2>Select Categories</h2>
            <ol>
                <select>
                {
                    categories.map(category=>
                        <option value={category}>{category}</option>
                    )
                }
                </select>
            </ol>
        </div>
    )
}