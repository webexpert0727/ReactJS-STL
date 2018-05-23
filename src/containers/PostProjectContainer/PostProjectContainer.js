import { connect } from "react-redux";
import { reduxForm, reset } from "redux-form";
import * as a from '../../actions/myProjects/actions';
import PostProject from '../../views/PostProject/PostProject';

const mapDispatchToProps = dispatch => ({
    addProject: (params,callBack) => dispatch(a.addProject(params,callBack)),
});
const mapStateToProps = state => ({
    ...state.contact,
    notifications: state.notifications
});
const validate = values => {
    const errors = {}
    if (!values.destination) {
        errors.destination = 'Required'
    }
    if (!values.address) {
        errors.address = 'Required'
    }
    if (!values.lenght) {
        errors.lenght = 'Required'
    }
    if (!values.height) {
        errors.height = 'Required'
    }
    if (!values.parcelWeight) {
        errors.parcelWeight = 'Required'
    }
    return errors
}
const afterSubmit = (result, dispatch) => dispatch(reset("postProjectForm"));
export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: "postProjectForm",
        validate,
        onSubmitSuccess: afterSubmit
    })(PostProject)
);