import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const searchQuery = createAsyncThunk(
  'needs/GetNeeds',
  async (query) => {
    return fetch(
      'url', {
        headers: {
        //   Authorization: localStorage.token
        }
      }
    ).then((res) => res.json())
  }
)



export const landingPageSlice = createSlice({
  name: 'landingPager',
  initialState: {
    searchQuery: null,
    searchResults: [
      // {
      //   charityname: 'Red Cross',
      //   location: '1 mile away',
      //   address: '123 Street,'
      //   category: 'clothes'
      // },
      // {
      //   charityname: 'Red Cross',
      //   location: '1.5 mile away',
      //   address: '123 Street,'
      //   category: 'Food'
      // },
      // {
      //   charityname: 'Red Cross',
      //   location: '1 mile away',
      //   address: '123 Street,',
      //   category: 'clothes',
      // },
    ],
    loading: false,
  },
  reducers: {

  },
  extraReducers: {
    [searchQuery.pending]: (state) => {
      state.loading = true
    },
    [searchQuery.fulfilled]: (state, action) => {
      state.searchResults = action.payload
      state.loading = true
    }
  }
})



// export const { searchQuery, removeScreen } = landingPageSlice.actions

export const selectsSearchResults = (state) => state.landingPage.searchResults

export default landingPageSlice.reducer

