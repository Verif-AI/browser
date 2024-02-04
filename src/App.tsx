import verifai_logo from './assets/verifai_logo.svg';

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function App() {
  return (
    <Box 
      sx={{
        padding: '10px',
        textAlign: 'left'
      }}
    >
      <Box 
        component='img' 
        src={verifai_logo}
        sx={{
          height: '50px',
          padding: '5px'
        }}
      />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-textarea"
          label="Claim"
          placeholder="Enter claim to verify"
          multiline
        />
      </Box>
    </Box>
  );
}

export default App;
