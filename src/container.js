import { connect } from 'react-redux';
import App from './App'

const mapStateToProps = state => ({
  players: state.get('players'),
});

const mapDispatchToProps = dispatch => ({
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
