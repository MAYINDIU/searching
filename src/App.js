import logo from './logo.svg';
import './App.css';
import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
 
function App() {
  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: option => option,
  });
 
  // Sample options for search box
  const myOptions = ['Shirt', 'Shirt for man','shirt for women', 'pant',
    'pant for men', 'Women dress', 'Dress',
    'lungi', 'lungi for burhan'];
  return (
    <div style={{ marginLeft: '40%', marginTop: '60px' }}>
    <h3>Greetings from GeeksforGeeks!</h3>
    <Autocomplete
      style={{ width: 500 }}
      freeSolo
      filterOptions={filterOptions}
      options={myOptions}
      renderInput={(params) => (
        <TextField {...params}
          variant="outlined"
          label="Search Box"
        />
      )}
    />
  </div>
  );
}

export default App;
