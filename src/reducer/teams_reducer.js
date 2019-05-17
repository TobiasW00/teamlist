import { SET_TEAMS} from "../actions/actiontypes";

export default function(state=[],action) {
  switch (action.type) {
    case SET_TEAMS:
    return action.payload;
    default:
      return state;
  }
}
