import { useState } from 'react';
import verifai_logo from './assets/verifai_logo.svg';

import ClaimForm from './components/ClaimForm';
import JustificationCard from './components/JustificationCard';

export default function App() {

  const [llmResponse, setLlmResponse] = useState({
    justification: '',
    veracity: null,
    veracityScore: 0
  });

  return (
    <div className='h-[500px] w-[400px]'>
      <div className='p-2 w-full'>
        <div className="flex justify-center">
          <img src={verifai_logo} className='w-24 h-10 pb-2' alt="" />
        </div>
        <ClaimForm onSubmit={setLlmResponse} />
        <JustificationCard
          veracity={llmResponse.veracity}
          justification={llmResponse.justification}
          veracityScore={llmResponse.veracityScore}
        />
      </div>
    </div>
  );
}