
import './App.css';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';


function App() {
  return (
  <>

      <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              w: '100%',
              bgcolor:'#ffcc80',
              borderRadius:'30px',
              mx:'40%',

              // width:'100%',
              py:'10px',
              my: '50px'
              // '& > *': {
              //   m: 1,
              // },
          }}>
          <h2>Zaloguj się aby kontynuować</h2>
          <TextField
              required
              id="outlined-required"
              label="E-Mail lub login"
              sx={{my: '20px'}}
          />
          <TextField
              required
              id="outlined-required"
              label="Hasło"
          />

          <Button sx={{
              my: '20px'
          }} variant="contained">Zaloguj się</Button>
          <FormGroup>
              <FormControlLabel control={<Switch defaultChecked/>} label="Pozostać zalogowanym?"/>
          </FormGroup>

          <ButtonGroup variant="text" aria-label="Basic button group" >
              <Button>Google</Button>
              <Button>Facebook</Button>
              <Button>Github</Button>
          </ButtonGroup>

      </Box>


  </>

  );
}

export default App;
