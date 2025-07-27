import { useState } from 'react';
import '../App.css';

const Form = (props) => {
  const [formData, setFormData] = useState({name: "", URL: ""});

  const handleChange = (event) => {
    /* TODO - Logic for changing state based on form changes */

    const {name, value} = event.target; // pulls the name and value of the HTML element, same as const name = event.target.name
    setFormData({...formData, [name]: value}); 
    // ...formData creates a new array of all the data from formData with the new formData submitted being added at the end (because React requires immutable updates)
    // [name]: value updates the corresponding key in the form's React state
    // with name being in brackets so the name of the element we want to update gets put there to be used as a key to locate it's value to change
  };

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault();

    /* TODO - Logic for calling props to handle submission and setting state changes */

    props.handleSubmit(formData);
    setFormData({ name: "", URL: ""}); // clear the name and URL boxes so that it's ready for the next submission
  };

  return (
    <form onSubmit={onFormSubmit}>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}


      <label htmlFor="name">Name: </label>
      <br/>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <br/>
      <br/>

      <label htmlFor="URL">URL: </label>
      <br/>
      <input type="text" name="URL" value={formData.URL} onChange={handleChange} required />


      <br/>
      <br/>

      <input type="submit" value="Submit" /> 
      {/* Could also have used a submit button similar to the one in Table where onClick calls submitForm, but I wanted to have both methods in this project. */}
    </form>
  )

};

export default Form;
