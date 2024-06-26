import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

interface InformationItem {
  title: string;
  link: string;
  snippet: string;
}

interface Result {
  statement: string;
  judgement: string;
  justification: string;
  process_time: number;
  information: InformationItem[];  // Updated to be an array of InformationItem objects
  message: string;
}

interface LlmState {
  results: Result[];
  loading: boolean;
  error: string | null;
  taskStatus: string | null;
}

const initialState: LlmState = {
  results: [],
  loading: false,
  error: null,
  taskStatus: null,
};

export const verifyClaim = createAsyncThunk(
  'llm/verifyClaim',
  async (claim: string, { rejectWithValue, dispatch }) => {
    try {
      const startResponse = await axios.post('http://127.0.0.1:8000/api/verify/', { claim });

      if (startResponse.status !== 202) {
        throw new Error('Network response was not ok');
      }

      const taskId = startResponse.data.task_id;
      let taskStatusResponse;

      do {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Polling interval (2 seconds)
        taskStatusResponse = await axios.get(`http://127.0.0.1:8000/api/get_task_status/${taskId}/`);

        if (taskStatusResponse.status !== 200) {
          throw new Error('Network response was not ok');
        }

        dispatch(setTaskStatus(taskStatusResponse.data.status)); // Update task status in the state
      } while (taskStatusResponse.data.status !== 'SUCCESS');

      return taskStatusResponse.data.result;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.error('Error response:', axiosError.response);
      }
      return rejectWithValue('Failed to verify claim');
    }
  }
);

export const llmSlice = createSlice({
  name: 'llm',
  initialState,
  reducers: {
    setTaskStatus: (state, action) => {
      state.taskStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyClaim.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.taskStatus = null;
      })
      .addCase(verifyClaim.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
        state.taskStatus = 'success';
      })
      .addCase(verifyClaim.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.taskStatus = 'failed';
      });
  },
});

export const { setTaskStatus } = llmSlice.actions;
export default llmSlice.reducer;
