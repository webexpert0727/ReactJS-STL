import { connect } from "react-redux";
import * as a from '../../actions/myProjects/actions';
import MyProjects from '../../views/MyProjects/MyProjects';

const mapDispatchToProps = dispatch => ({
    fetchProjects:() => dispatch(a.fetchProjects()) 
});
const mapStateToProps = state => ({
    ...state.myProjects
});
const mergeProps = (state, actions, ownProps) => ({
    ...state,
    ...actions,
    ...ownProps
});
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MyProjects);