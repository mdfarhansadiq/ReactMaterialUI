import React from 'react'
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete';
function App() {

  return (
    <div className="App">
      <header className="App-header">
          <ButtonGroup>
              <Button
                  startIcon={<SaveIcon/>}
                  size="large" variant="contained" color="primary" >Save</Button>
              <Button
                  endIcon={<DeleteIcon/>}
                  size="large" variant="contained" color="secondary" >Discard</Button>
          </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
