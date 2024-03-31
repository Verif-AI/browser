import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import VeracityBar from './VeracityScoreBar';

function JustificationCard() {
  const { justification, veracityScore, sources } = useSelector((state: RootState) => state.llm);

  const sourceList = sources.map((source, index) => (
    <li key={index} className="mb-1">
      <a href={source} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        {source}
      </a>
    </li>
  ));

  const justificationContent = justification !== "" ? (
    <div className="space-y-4">
      <div>
        <Typography variant="h6" className="font-bold">
          Justification
        </Typography>
        <Typography variant="body1">
          {justification}
        </Typography>
      </div>
      <div>
        <Typography variant="h6" className="font-bold">
          Sources
        </Typography>
        <ul className="list-disc pl-5">
          {sourceList}
        </ul>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-full w-full">
      <Typography variant="body1" color="text.secondary">
        No claim entered to verify
      </Typography>
    </div>
  );

  return (
    <div className="pt-2">
      <Card variant="outlined" className="shadow-md">
        <div className="p-4">
          {justification !== "" && (
            <div className="pb-4">
              <VeracityBar />
            </div>
          )}
          <div className="max-h-[300px] overflow-auto">
            {justificationContent}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default JustificationCard;

