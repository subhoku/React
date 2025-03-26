import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Ecommerce() {
  // State to store products data
  const [products, setProducts] = useState([]);

  // Fetch products from Fake Store API when the component loads
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json()) // Convert response to JSON format
      .then((data) => setProducts(data)) // Save fetched data into state
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container">
      <h2 className="text-2xl font-semibold text-white-700 mb-4">E-commerce Products</h2>
      <table className="table table-hover table-bordered table-responsive ">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Price ($)</th>
            <th>Category</th>
            <th>Image</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  width="80"
                  height="80"
                />
              </td>
              <td>{product.description.substring(0, 100)}...</td>
              <td>{product.rating.rate} ⭐</td>
              <td>
                <button className="btn btn-success btn-sm">Edit</button>
              <button className="btn btn-danger btn-sm ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
