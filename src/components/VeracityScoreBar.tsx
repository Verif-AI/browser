import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { LinearProgress, Typography } from "@mui/material";

function VeracityBar() {
  const { veracity, veracityScore } = useSelector((state: RootState) => state.llm);

  const veracityStatement: string = veracity == null ? "Veracity" : (veracity ? "Mostly True" : "Mostly False");

  return (
    <>
      <Typography className="flex justify-center" variant="overline">
        {veracityStatement}
      </Typography>
      <Typography className="flex justify-center pb-2" variant="h5">
        {veracityScore}
      </Typography>
      <LinearProgress variant="determinate" className="inline-block" value={veracityScore} />
    </>
  );
}

export default VeracityBar; 
