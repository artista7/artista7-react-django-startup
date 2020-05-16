import * as types from "./actionTypes";

export function _loadMovies() {
    return function (dispatch) {
        debugger;
        return fetch(`${process.env.REACT_APP_API_URL}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Token 0e41971701f62d31bf6c16a8448a93dae5433883'
            }
        }).then(resp => resp.json()).then(res => {
            dispatch(_loadMoviesSuccess(res))
        }).catch(err => {
            console.log(err)
        })
    }
}


export function _loadMoviesSuccess(res) {
    return function (dispatch) {
        dispatch({ type: types.LOAD_MOVIES, res })
    }
}