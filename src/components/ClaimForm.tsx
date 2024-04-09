import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyClaim } from '../slices/llmSlice';
import { RootState, AppDispatch } from '../store';


function ClaimForm() {
  const [claim, setClaim] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, taskStatus } = useSelector((state: RootState) => state.llm);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    dispatch(verifyClaim(claim));
  };

  return (
    <div>
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
                <IconButton type="submit" disabled={loading}>
                  {loading ? <CircularProgress size={24} /> : <ArrowForwardIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default ClaimForm;












