import { useState } from "react";

export default function App() {
  const [formValue, setFormValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    // console.log(data);

    const formElements = event.target.elements;
    const name = formElements.name.value;

    setFormValue(name);
  }

  return (
    <>
      <h2>Form Submits</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" />

        <button type="submit">Submit</button>
      </form>

      {formValue && <p>Submitted Value: {formValue}</p>}
    </>
  );
}
