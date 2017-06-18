import { connect } from 'react-redux';
import App from './App'
import { sortByRank } from './utils/heroUtils';

const mapStateToProps = state => ({
  players: state.get('players').sort( sortByRank ),
});

const mapDispatchToProps = dispatch => ({
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
