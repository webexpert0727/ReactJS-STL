import {
    connect
} from "react-redux";
import {
    reduxForm, reset
} from "redux-form";
import * as a from '../../actions/contactUs/actions';
import ContactUs from '../../views/ContactUs/contact-us';

const mapDispatchToProps = dispatch => ({
    addContact: (params) => dispatch(a.addContactUs(params)),
});
const mapStateToProps = state => ({
    ...state.contact,
    notifications: state.notifications
});
const mergeProps = (state, actions, ownProps) => ({
    ...state,
    ...actions,
    ...ownProps
});
const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
}
const afterSubmit = (result, dispatch) => dispatch(reset("contactUsForm"));
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
    reduxForm({
        form: "contactUsForm",
        validate,
        onSubmitSuccess: afterSubmit
    })(ContactUs)
);