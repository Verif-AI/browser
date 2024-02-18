import axios from 'axios';

export interface VerifyClaimResponse {
  // TODO: Define response data structure here (e.g., success:boolean, message:string)
}

export default async function verifyClaim(claim: string): Promise<VerifyClaimResponse> {
  try {
    const response = await axios.post('http://localhost:3000/verify', { claim });
    return response.data;
  } catch (error) {
    console.error('Error verifying claim:', error);
    throw error;
  }
};