import { connect } from 'react-redux';
import App from './App'
import { sortByRank } from './utils/heroUtils';
import { postAssembleAction } from './action';

const mapStateToProps = state => ({
  players: state.get('players').sort( sortByRank ),
  videos: state.get('videos'),
  token: state.get('token'),
  username: state.get('username'),
  hasAssembled: state.get('hasAssembled')
});

const mapDispatchToProps = dispatch => {
  return {
    postAssembleAction: (token, message) => {
      dispatch(postAssembleAction(token, message))
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
