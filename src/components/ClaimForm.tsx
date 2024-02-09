import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

// import { useState } from 'react';

export default function ClaimForm() {

  // const [claim, setClaim] = useState("")

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    alert("Form Submitted");
  };


  // TODO: Use useFormControl to manage adornments

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className='p-2 w-full'
        id="claim-text-field"
        label="Enter claim to verify"
        placeholder="Claim"
        maxRows={4}
        multiline
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <ArrowForwardIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </form>

  )
}