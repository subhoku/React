import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function DataBindingComponent() {
  // State to store Mars photos data
  const [mars, setMars] = useState([]);

  // Fetch Mars photos from NASA API when the component is first displayed
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    )
      .then((response) => response.json()) // Convert response to JSON format
      .then((data) => setMars(data.photos)) // Save fetched data into state
      .catch((error) => console.error("Error fetching Mars photos:", error));
  }, []);

  return (
    <div className="container">
      <h2>Mars Rover Photos</h2>
      <table border="1" className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            
            <th>Camera Name</th>
            <th>Image</th>
           
            <th>Earth Date</th>
            <th>Rover_Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {mars.map((photo) => (
            <tr key={photo.id}>
              <td>{photo.id}</td>
              <td>{photo.camera.full_name}</td>
              <td>
                <img
                  src={photo.img_src}
                  alt="Mars"
                  width="100"
                  height="100"
                />
              </td>
              <td>{photo.earth_date}</td>
              <td>{photo.rover.id}</td>
              <td>{photo.rover.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}