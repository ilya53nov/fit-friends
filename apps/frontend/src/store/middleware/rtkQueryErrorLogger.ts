import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {

  if (isRejectedWithValue(action)) {

    if (Array.isArray(action.payload.data.message)) {
      action.payload.data.message.map((item: string) => toast.error(item));
    }
    
    toast.error(action.payload.data.message);

  }

  return next(action)
}
