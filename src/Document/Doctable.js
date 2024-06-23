import React, { useState } from "react";
import "./Doctable.css";

const Doctable = () => {
  const [selectedOption, setSelectedOption] = useState("weekly");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const mockData = [
    { name: "Annual Report", file: "PDF", category: "Property", author: "Diana Matthews", status: "Send" },
    { name: "Business Plan ", file: "WORD", category: "Cryptocurrency", author: "Phillip James", status: "Send" },
    { name: "Mareketing Tools", file: "PDF", category: "Conten Creator", author: "Amanda Rose", status: "Pending" },
  ];

  return (
    <div className="Doctable">
      <div className="header">
        <p style={{ fontWeight: "bold", fontSize: "1rem" }}>Document</p>
        <div>
          <select id="period-select" value={selectedOption} onChange={handleSelectChange}>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <p>Document Tracking Information</p>
      <div className="card-container">
        <table className="document-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>File</th>
              <th>Category</th>
              <th>Author</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.file}</td>
                <td>{item.category}</td>
                <td>{item.author}</td>
                <td className={item.status === "Send" ? "status-send" : "status-pending"}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctable;
