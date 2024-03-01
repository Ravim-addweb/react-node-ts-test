import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../helpers/axiosConfig';

interface Image {
  title: string;
  link: string;
  media: {
    m: string;
  };
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

const initialState: { images: Image[]; status: string } = {
  images: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
};

export const fetchImages = createAsyncThunk('images/fetchImages', async ({ tags, page }: { tags: string, page: number }) => {
  const response = await axios.get(`http://localhost:5000/api/v1/list?page=${page}&per_page=20&tags=${tags}`);
  return response.data.data;
});


const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    clearImages: (state) => {
      state.images = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = [...state.images, ...action.payload];
      })
      .addCase(fetchImages.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { clearImages } = imagesSlice.actions;

export default imagesSlice.reducer;
