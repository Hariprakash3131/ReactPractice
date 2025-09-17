import React, { useState } from "react";
import PersonDetails from "./PersonDetails";
import "./App.css";

export default function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const persons = [
    { id: 1, name: "Alice", age: 25, phone: "1234567890", address: "123 Street, City" },
    { id: 2, name: "Bob", age: 17, phone: "0987654321", address: "456 Avenue, City" },
    { id: 3, name: "Charlie", age: 30, phone: "1122334455", address: "789 Road, City" },
  ];

  return (
    <div className="app">
      <h1>Person List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.phone}</td>
              <td>
                <button
                  disabled={person.age <= 18}
                  onClick={() => setSelectedPerson(person)}
                >
                  View More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPerson && (
        <PersonDetails
          person={selectedPerson}
          onClose={() => setSelectedPerson(null)}
        />
      )}
    </div>
  );
}
