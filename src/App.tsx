import verifai_logo from './assets/verifai_logo.svg';

import ClaimForm from './components/ClaimForm';
import JustificationCard from './components/JustificationCard';

export default function App() {
    return (
        <div className='h-[500px] w-[400px]'>
            {/* <div className='border border-red-500 rounded-md'> */}
            <div className='p-2 w-full'>
                <div className="flex justify-center">
                    <img src={verifai_logo} className='w-24 h-10 pb-2' alt="" />
                </div>
                <ClaimForm />
                <JustificationCard />
            </div>
            {/* </div> */}
        </div>
    );
}