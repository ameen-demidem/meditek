import { connect } from 'react-redux';
import updateName from '../actions';
import HelloWorld from '../components';

const mapStateToProps = (state) => ({
  name: state,
});

const mapDispatchToProps = (dispatch) => ({
  onNameChange: (value) => { dispatch(updateName(value)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
