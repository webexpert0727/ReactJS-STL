import Parse from 'parse';
import {success, error} from 'react-notification-system-redux';
import * as a from './actionTypes';
Parse.initialize("kgMoNAcxUBHJIo9KUVQqcjYOZvpZv4fR4pky1zJH", "je5obIpZemmDCQ1ivZqcZaj7vpUNVFQtvjElbpAi"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

const notificationOpts = {
    title: 'Sample Notification',
    message: '',
    position: "bc",
    autoDismiss: 3
};

export const addContactUs = (params) => {
    return dispatch => {
        dispatch({
            type:a.CONTACT_US_REQUEST
        });
        const ContactUs = Parse.Object.extend("ContactUs");
        const promise = new ContactUs();
        promise.save(params).then(() => {
            dispatch({
                type:a.CONTACT_US_SUCCESS
            });
            dispatch(success({
                ...notificationOpts,
                title:"Success",
                message:"Your message has been sent successfully"
            }));
        },(error) => {
            dispatch({
                type:a.CONTACT_US_FAILURE,
                error
            })
        });
        return promise;
    }
}