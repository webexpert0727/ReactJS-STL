import { connect } from "react-redux";
import * as a from '../../actions/projects/actions';
import Projects from '../../views/Projects/Projects';

const mapDispatchToProps = dispatch => ({
    fetchProjects:(params) => dispatch(a.fetchProjects(params)) 
});
const mapStateToProps = state => ({
    ...state.projects
});
export default connect(mapStateToProps, mapDispatchToProps)(Projects);