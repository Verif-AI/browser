import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import VeracityBar from './VeracityScoreBar';

interface JustificationCardProps {
  justification: any;
  veracity: boolean | null;
  veracityScore: number;
}

const JustificationCard = (props: JustificationCardProps) => {
  const justification = props.justification !== "" ? (
    <Typography variant="body1">
      {props.justification}
    </Typography>
  ) : (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
      <Typography variant="body1" color="text.secondary">
        No claim entered to verify
      </Typography>
    </div>
  );

  return (
    <div className="pt-2">
      <Card variant="outlined">
        <div className="pt-2 pb-4 pr-4 pl-4">
          <div className="pb-4" >
            <VeracityBar veracityScore={props.veracityScore} veracity={props.veracity} />
          </div>
          <div className="h-[300px] overflow-auto">
            {justification}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default JustificationCard;
