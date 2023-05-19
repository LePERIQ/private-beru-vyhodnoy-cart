import { configureStore } from '@reduxjs/toolkit'
import  shopDataReducer  from './beersSlice/beersSlice';
import  switchStateReducer  from './toggleSwitchSlice/toggleSwitchSlice';
// ...

const store = configureStore({
  reducer: {
    shopData: shopDataReducer,
    switchState : switchStateReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;