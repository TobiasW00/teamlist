import { combineReducers } from "redux";
import teamsReducer from "./teams_reducer";
import channelsReducer from "./channels_reducer";
const rootReducer = combineReducers({
  teams: teamsReducer,
  channels: channelsReducer,
});

export default rootReducer;