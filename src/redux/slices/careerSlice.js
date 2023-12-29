import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCareers } from "../../utils/apis";

const initialState = {
  careers: {
    totalPages: 0,
    currentPage: 0,
    careers: [],
  },
  loading: false,
  error: null,
};

export const fetchCareer = createAsyncThunk(
  "career/fetchCareer",
  async (data) => {
    let page = data?.page;
    let limit = data?.limit;
    try {
      const response = await getCareers(page, limit);
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
    }
  }
);

export const careerSlice = createSlice({
  name: "careers",
  initialState,
  reducers: {
    setCareers: (state, action) => {
      state.careers = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCareer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCareer.fulfilled, (state, action) => {
        state.loading = false;
        state.careers = action.payload;
      })
      .addCase(fetchCareer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCareers } = careerSlice.actions;
export default careerSlice.reducer;
