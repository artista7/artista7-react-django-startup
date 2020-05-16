//import libraries
import React from 'react';
//import PropTypes from 'prop-types';
import * as movieActions from "../redux/actions/movieActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// create a component
class movies extends React.Component {
    state = {
        movies: {
            items: []
        }
    }

    componentDidMount() {
        this.props.movieActions._loadMovies()
    }

    render() {
        const { movieInfo } = this.props.state;
        return (
            <div className="App">
                <h1>Movies</h1>
                {movieInfo.movies.items.map((movie, i) => {
                    return <h5 key={i}>{movie.title}</h5>
                })}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        movieActions: bindActionCreators(movieActions, dispatch)
    };
}
movies.propTypes = {
};
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(movies);
