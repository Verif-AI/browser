import axios from 'axios';

export interface VerifyClaimResponse {
  justification: string;
}

export default async function verifyClaim(claim: string): Promise<VerifyClaimResponse> {
  try {
    const response = await axios.get('http://localhost:3000/verify', { params: {claim: claim} });
    return response.data;
  } catch (error) {
    console.error('Error verifying claim:', error);
    throw error;
  }
};