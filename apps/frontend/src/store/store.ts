import {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './api/api';
import { rtkQueryErrorLogger } from './middleware/rtkQueryErrorLogger';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware, rtkQueryErrorLogger])
});

setupListeners(store.dispatch);
