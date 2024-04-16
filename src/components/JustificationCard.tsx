import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Card from '@mui/material/Card';
import ResultCard from './ResultsCard'; // Adjust the path based on your file structure

function JustificationCard() {
  const { results, taskStatus } = useSelector((state: RootState) => state.llm);

  return (
    <div className="pt-2">
      {taskStatus === 'success' && results.map((result, index) => (
        <ResultCard key={index} result={result} />
      ))}
    </div>
  );
}

export default JustificationCard;
