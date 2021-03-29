import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import landingPageReducer from '../routes/LandingPage/LandingPageSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    landingPage: landingPageReducer,

  },
});
