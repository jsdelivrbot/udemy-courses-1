import { FETCH_WEATHER } from '../actions/index';
import { FETCH_WEATHER_ERROR } from '../actions/index';

export default function (state = [], action) {

  if (action.error) {
    action.type = FETCH_WEATHER_ERROR;
  }
  switch (action.type) {
    case FETCH_WEATHER:
      // Next two lines are identical
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ];
    case FETCH_WEATHER_ERROR:
      console.log(action.payload.response.data);
  }

  return state;
}
