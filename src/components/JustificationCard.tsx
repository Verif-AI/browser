import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import VeracityScoreBar from './VeracityScoreBar';

const JustificationCard = () => {
  return (
    <div className="pt-2">
      <Card variant="outlined">
        <div className="pt-2 pb-4 pr-4 pl-4">
          <div className="pb-4" >
            <VeracityScoreBar veracityScore={50} />
          </div>
          <div className="h-[300px] overflow-auto">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Hac habitasse platea dictumst vestibulum rhoncus est pellentesque
              elit ullamcorper. Tristique et egestas quis ipsum suspendisse ultrices.
              Felis eget nunc lobortis mattis aliquam faucibus purus in.
              Pellentesque nec nam aliquam sem et tortor consequat id porta.
              Laoreet non curabitur gravida arcu ac tortor.
              <br></br>
              <br></br>
              Sources: <br></br>
              https://google.com <br></br>
              https://facebook.com <br></br>
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default JustificationCard;