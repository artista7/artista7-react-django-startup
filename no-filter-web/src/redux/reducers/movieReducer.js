import * as types from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function movieReducer(state = initialState, action) {
    switch (action.type) {

        case types.LOAD_MOVIES:
            return Object.assign({}, state, {
                movies: {
                    items: [...state.movies.items, ...action.res],
                    nextToken: null
                }
            });

        default:
            return state;
    }
}