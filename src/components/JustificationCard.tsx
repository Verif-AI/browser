import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function JustificationCard() {
  return (
    <div className="pt-2">
      <Card variant="outlined">
        <CardContent>
          <Typography>
            This is a sentence.<br></br>
            This is another sentence.
          </Typography>
        </CardContent>
      </Card>
    </div>

  )
}