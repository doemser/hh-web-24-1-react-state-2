import { useState } from "react";

const people = [
  { id: "1", name: "Dominik" },
  { id: "2", name: "Peter" },
  { id: "3", name: "Jessica" },
];

export default function ControlledInputs() {
  const [inputValue, setInputValue] = useState("Dominik");

  const filteredPeople = people.filter((person) =>
    person.name.includes(inputValue)
  );

  return (
    <>
      <h2>Controlled Inputs - Fuzzy Search</h2>
      <p>Currently typed: {inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />

      <ul>
        {filteredPeople.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
    </>
  );
}
