import { rootReducer } from "./rootReducer";
import logger from 'redux-logger'
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
