import { useState } from 'react';
import verifai_logo from './assets/verifai_logo.svg';

import ClaimForm from './components/ClaimForm';
import JustificationCard from './components/JustificationCard';

export default function App() {
  const tempJustification: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
                            https://facebook.com <br></br>`

  const veracityScore: number = 50

  const [llmResponse, setLlmResponse] = useState({
    justification: tempJustification,
    veracityScore: veracityScore
  });

  return (
    <div className='h-[500px] w-[400px]'>
      <div className='p-2 w-full'>
        <div className="flex justify-center">
          <img src={verifai_logo} className='w-24 h-10 pb-2' alt="" />
        </div>
        <ClaimForm onSubmit={setLlmResponse} />
        <JustificationCard 
          justification={llmResponse.justification} 
          veracityScore={llmResponse.veracityScore}
        />
      </div>
    </div>
  );
}