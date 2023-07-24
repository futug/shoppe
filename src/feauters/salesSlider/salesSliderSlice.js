import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const salesSliderSlice = createSlice({
    name: "salesSlider",
    initialState: {
        salesSliderList: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getSlides.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getSlides.fulfilled, (state, action) => {
            state.salesSliderList = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getSlides.rejected, (state) => {
            state.isLoading = false;
            console.log("access denied");
        });
    },
});

export const getSlides = createAsyncThunk("salesSlider/getSlides", async () => {
    const response = await axios.get(`${BASE_URL}/main-page-slider?populate=*`);
    return response.data.data.attributes.sliderImage.data;
});

export default salesSliderSlice.reducer;
