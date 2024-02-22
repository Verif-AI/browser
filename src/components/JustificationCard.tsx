import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import VeracityScoreBar from './VeracityScoreBar';

interface JustificationCardProps {
  justification: string;
  veracityScore: number;
}

const JustificationCard = (props: JustificationCardProps) => {
  return (
    <div className="pt-2">
      <Card variant="outlined">
        <div className="pt-2 pb-4 pr-4 pl-4">
          <div className="pb-4" >
            <VeracityScoreBar veracityScore={props.veracityScore} />
          </div>
          <div className="h-[300px] overflow-auto">
            <Typography variant="body1">
              {props.justification}
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default JustificationCard;
