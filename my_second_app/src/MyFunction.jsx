import React from "react";

function PrintList({ items }) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
export default PrintList;  