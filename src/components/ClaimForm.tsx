import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import verifyClaim, { VerifyClaimResponse } from '../utils/VerifyClaim';

import { useState } from 'react';

interface ClaimFormProps {
  onSubmit: any;
}

const ClaimForm = (props: ClaimFormProps) => {

  const [claim, setClaim] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Replace with API call
      // const verifyClaimResponse: Promise<VerifyClaimResponse> = verifyClaim(claim);
      const justification: string = claim;
      const veracityScore: number = 40;
      props.onSubmit({justification: justification, veracityScore: veracityScore});
    } catch (error) {
      // Handle error gracefully, e.g., display user-friendly message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className='p-2 w-full'
        id="claim-text-field"
        label="Enter claim to verify"
        placeholder="Claim"
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
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

export default ClaimForm;