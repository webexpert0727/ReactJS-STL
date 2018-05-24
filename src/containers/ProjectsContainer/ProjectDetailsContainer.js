import { connect } from "react-redux";
import * as a from '../../actions/projects/actions';
import ProjectDetails from '../../views/ProjectDetails/ProjectDetails';

const mapDispatchToProps = dispatch => ({
    fetchProjectDetails:(objectId) => dispatch(a.fetchProjectDetails(objectId))
});
const mapStateToProps = state => ({
    ...state.projects
});
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);