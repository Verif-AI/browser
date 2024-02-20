import { LinearProgress, Typography } from "@mui/material";

interface VeracityScoreProps {
  veracityScore: number; //Progress value between 0 and 100
}

const VeracityScoreBar: React.FC<VeracityScoreProps> = ({ veracityScore }) => {
  return (
    <>
      <Typography className="flex justify-center" variant="overline">
        Veracity Score
      </Typography>
      <Typography className="flex justify-center pb-2" variant="h5">
        {veracityScore}
      </Typography>
      <LinearProgress variant="determinate" value={veracityScore} />
    </>
  );
}

export default VeracityScoreBar; 