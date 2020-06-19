import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import postsReducer from "./posts/posts.reducer";

const persistConfig = {
  key: "thisisakey",
  storage,
  blacklist: ["posts"],
};
const rootReducer = combineReducers({
  posts: postsReducer,
});

export default persistReducer(persistConfig, rootReducer);
