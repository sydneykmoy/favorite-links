import { useState } from 'react';
import Table from './Table';
import Form from './Form';
import '../App.css';

const LinkContainer = (props) => {
  const [favLinks, setFavLinks] = useState([
    {name: 'GitHub', URL: 'https://github.com/sydneykmoy'},
    {name: 'LinkedIn', URL: 'https://www.linkedin.com/in/sydneykmoy'}
  ]);

  const handleRemove = (index) => {
    /* TODO - Create logic for setting the state to filter array and remove favLink at index */
    setFavLinks(favLinks.filter((_, i) => i !== index));
  };

  const handleSubmit = (favLink) => {
    /* TODO - Create logic to set state and add new favLink to favLinks array in state */
    setFavLinks([...favLinks, favLink]);
  };

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>

      <br />

      {/*TODO - Add Table Component */}
      <Table linkData={favLinks} removeLink={handleRemove} />
      
      <br />
      <br />

      <h1>Add A New Link</h1>
      {/*TODO - Add Form Component */}
      <Form handleSubmit={handleSubmit} />
      <br />
    </div>
  )
};

export default LinkContainer;
