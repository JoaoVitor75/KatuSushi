import { EmailRequest } from "../types/EmailRequest";
import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const TOKEN = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAxMDYzNjU2Mjc2NDkxMzI4NTc5IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJqdmZlcnJlaXJhQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjRKY0lwZ1ZrV1ZzR2RfMEV2YWlUUmciLCJuYmYiOjE3MzE5NDEyODAsImlhdCI6MTczMTk0MTU4MCwiZXhwIjoxNzMxOTQ1MTgwLCJqdGkiOiJlMjI2YTkzNWI4M2ZkYzQ0ZjQyOTg4MGU3ODFjYzkxYmFkZmJmMjZmIn0.gk7WiDdZl81tRjPSqpwYMyLb0wsDHD6buD9CXbyMOPZe-K5_GTOpxfmZrXbxp8F8ZFQesSOdbC8exBeg0p_K9dLWUsYhCbt5ZcfNEeVlVpAoiHKYmq4o2oPkZ2VI52aBT2gweMpaUDZuoqGmyjwkqpZNuVZs0-ZIh0x4nZTAOwcqVIRKX6DKTab0DW0_y5kfz5y9KD0S3K1T3L6WwQzVdXb7O8gnPEyHZsgp3oYOoDQZ_BuNGSZe1bwe81EUXt0tHOSRyGTCkBy43B-SEFr2Yte6CXVEDhYRtwqjy2JsfZZezBAYNHzTSVCLkiInkouF06bA-uY1HPH4gKlg9cwftA";

const sendEmailRequest = async (novoEmail: EmailRequest): AxiosPromise<EmailRequest> => {
    return axios.post('/api/function-1', novoEmail, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    },
  });
};

export function useEmailRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: sendEmailRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['email-request'] });
    },
  });
} 


// comandinho gcloud auth print-identity-token

