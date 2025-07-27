import React from 'react';
import '../App.css';

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
};

const TableBody = (props) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via props
  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td>
          {
            // if the name entered is "GitHub", display the GitHub logo next to the row name
            row.name === 'GitHub' ? ( 
              <> <a href="https://github.com/sydneykmoy" target="_blank" rel="noopener noreferrer">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" /></a> 
                {row.name} 
              </> // <> This is a fragment, it lets you put HTML and jsx together without throwing an error and without needing a new div class that would disrupt the layout. </>
            ) 

            // if the name entered  is "LinkedIn", display the LinkedIn logo next to the row name
            : row.name === 'LinkedIn' ? ( 
                <> <a href="https://www.linkedin.com/in/sydneykmoy" target="_blank" rel="noopener noreferrer"> 
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn Logo" /></a> 
                  {row.name} 
                </>
            )  
            
            // else, display a random image for each new row name (if you repeat a row name the image will be the same)
            : (<> <img src={`https://picsum.photos/seed/${row.name}/30`} alt="Random Image" /> {row.name} </>)

          }
        </td>

        <td>
          <a href={row.URL} target="_blank" rel="noopener noreferrer">{row.URL}</a>
          {/* rel="noopener noreferrer" prevents the new tab from accessing the window.opener object (security concern) */}
        </td>

        <td>
          <button onClick={() => props.removeLink(index)}>Delete</button>
        </td>
      </tr>
    )
  });

  return <tbody>{rows}</tbody>;

};

const Table = (props) => {
  
  /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/

  /* HTML table using JSX
  return (
    <table>
      <thead>
        <tr>
          <th>Example Table using HTML</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>This is for a full stack web development class.</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>This is the footer.</td>
        </tr>
      </tfoot>
    </table>
  ) 
  */

  return (
    <table>
      <TableHeader />
      <TableBody linkData={props.linkData} removeLink={props.removeLink} />
    </table>
  )

};

export default Table;
