import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 function DataBindingComponent(){
    // var categories=["All","electronics","Footwear","lifestyle","books"];
    // return(
    //     <div>
    //         <h2>Select Categories</h2>
    //         <ol>
    //             <select>
    //             {
    //                 categories.map(category=>
    //                     <option value={category}>{category}</option>
    //                 )
    //             }
    //             </select>
    //         </ol>
    //     </div>
    //)
    var products=[
        {Name: 'Samsung TV', Price: 28762.32},
        {Name: 'LG Plasma TV', Price: 38762.32},
        {Name: 'Samsui', Price: 21762.32},
        {Name: 'Videocon', Price: 11762.32}
    ];
    return(
        <div className="container">
        <h3>Products</h3>
          <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    //looping through each product
                    products.map(product=>
                        <tr>
                        <td>{product.Name}</td>
                        <td>{product.Price}</td>
                        </tr>
                    )
                }
            </tbody>
          </table>
          </div>
    )
}
export default DataBindingComponent