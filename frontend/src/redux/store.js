import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
// import { reducer as SingleReducer } from "./Singlereducer/reducer";
// import { reducer as AnimieReducer } from "./All_Animie/reducer";
// import { reducer as SearchReducer } from "./SearchReducer/Reducer";
// import { reducer as AllseasonReducer } from "./All_Season/reducer";
// import { reducer as DownloadReducer } from "./DownloadsRedux/reducer";
// import { reducer as Latest_Anime_Reducer } from "./Latest_Anime/reducer";
import { reducer as NewsReducer } from "./All_News/reducer";
import { LoginReducer } from "./LoginReducer/LoginReducer";

const mainReducer = combineReducers({
 NewsReducer,
 LoginReducer
});

export const store = legacy_createStore(mainReducer, applyMiddleware(thunk));