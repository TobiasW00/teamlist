import { SET_CHANNELS} from "../actions/actiontypes";

export default function(state={},action) {
    const newsstate = Object.assign({}, state);
   
  switch (action.type) {
    case SET_CHANNELS:
        newsstate[action.payload.teamid] = action.payload.value;
    return newsstate;
    default:
      return state;
  }
}
