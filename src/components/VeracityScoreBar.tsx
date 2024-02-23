import { LinearProgress, Typography } from "@mui/material";

interface VeracityScoreProps {
  veracityScore: number;
}

const VeracityScoreBar= (props: VeracityScoreProps) => {
  return (
    <>
      <Typography className="flex justify-center" variant="overline">
        Veracity Score
      </Typography>
      <Typography className="flex justify-center pb-2" variant="h5">
        {props.veracityScore}
      </Typography>
      <LinearProgress variant="determinate" value={props.veracityScore} />
    </>
  );
}

export default VeracityScoreBar; 