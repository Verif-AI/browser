import { Box, Grid, LinearProgress, Typography } from "@mui/material";

interface VeracityProps {
  veracity: boolean | null;
  veracityScore: number;
}

const VeracityBar = (props: VeracityProps) => {
  const veracityStatement: string = props.veracity == null ? "Veracity" : (props.veracity ? "Mostly True" : "Mostly False")

  return (
    <>
      <Typography className="flex justify-center" variant="overline">
        {veracityStatement}
      </Typography>
      <Typography className="flex justify-center pb-2" variant="h5">
        {props.veracityScore}
      </Typography>
      <LinearProgress variant="determinate" className="inline-block" value={props.veracityScore} />
    </>
  );
}

export default VeracityBar; 