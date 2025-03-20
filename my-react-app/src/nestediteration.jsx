import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GroupedProducts() {
    var menu = [
        { category: 'Electronics', Products: ["Samsung TV", "Mobile"] },
        { category: 'Footwear', Products: ["Bata", "Nike"] },
        { category: 'Lifestyle', Products: ["Menswear", "Women's Wear"] }
    ];

    return (
        <div className="container">
            <h2>Categories and Products</h2>
            <form>
                {menu.map((item, index) => (
                    <div key={index} className="mb-3">
                        <label htmlFor={`select-${index}`} className="form-label">
                            {item.category}
                        </label>
                        <select id={`select-${index}`} className="form-select">
                            {item.Products.map((product, productIndex) => (
                                <option key={productIndex} value={product}>
                                    {product}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </form>
        </div>
    );
}
