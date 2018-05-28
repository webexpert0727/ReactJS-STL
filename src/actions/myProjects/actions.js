import _ from 'lodash';
import Parse from 'parse';
import { success, error } from 'react-notification-system-redux';
import * as a from './actionTypes';
Parse.initialize("kgMoNAcxUBHJIo9KUVQqcjYOZvpZv4fR4pky1zJH", "je5obIpZemmDCQ1ivZqcZaj7vpUNVFQtvjElbpAi"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

const notificationOpts = {
    title: 'Sample Notification',
    message: '',
    position: "bc",
    autoDismiss: 3
};

export const fetchProjects = () => {
    return dispatch => {
        const currentUser = Parse.User.current();
        if(currentUser){
            dispatch({
                type:a.FETCH_MY_PROJECT_REQUEST
            });
            const promise = new Parse.Query("Project");
            promise.equalTo("Posted", currentUser.id);
            promise.find().then(function(results) {
                const projects = [];
                if(!_.isEmpty(results)){
                    _.map(results,(project) => {
                        projects.push({
                            objectId: project.id,
                            title: project.get('Title'),
                            status: project.get("Status"),
                            escrow: project.get("Escrow"),
                            weight: project.get("Weight"),
                            cost: project.get('cost'),
                            description: project.get('description'),
                            destination: project.get('destination'),
                            address: project.get("address"),
                            height: project.get("height"),
                            lenght: project.get("lenght"),
                            canDeliver: project.get("canDeliver"),
                            isAccepted: project.get("isAccepted"),
                            pickupAccepted: project.get("pickupAccepted"),
                            pickupRequested: project.get("pickupRequested"),
                            image: project.get('ProjectImage'),
                            accepted: project.get("Accepted"),
                            completionCode: project.get("CompletionCode")
                        })
                    })
                }
                dispatch({
                    type:a.FETCH_MY_PROJECT_SUCCESS,
                    payload:projects
                })
            },(error) => {
                dispatch({
                    type:a.FETCH_MY_PROJECT_FAILURE,
                    payload:error
                })
              });
            return promise;
        }
        return currentUser;
    }
}

export const addProject = (params,callBack) => {
    console.log(params)
    return dispatch => {
        const currentUser = Parse.User.current();
        if(!_.isEmpty(currentUser)){
            dispatch({
                type:a.ADD_POST_PROJECT_REQUEST
            });
            const Project = Parse.Object.extend("Project");
            const promise = new Project();
            let projectParams = Object.assign({},params,{
                Posted:currentUser.id,
            })
            if(params.file.lenght > 0){
                const projectImages = params.file[0];
                const parseFile = new Parse.File(projectImages.name, projectImages);
                projectParams = Object.assign({},params,{
                    Posted:currentUser.id,
                    ProjectImage:parseFile
                })
            }
            promise.save(projectParams).then(() => {
                dispatch({
                    type:a.ADD_POST_PROJECT_SUCCESS
                });
                dispatch(success({
                    ...notificationOpts,
                    title:"Success",
                    message:"Your project has been created successfully"
                }));
               callBack();
            },(e) => {
                dispatch({
                    type:a.ADD_POST_PROJECT_FAILURE,
                    error:e
                })
                dispatch(success({
                    ...notificationOpts,
                    title:"Error",
                    message:e.message
                }));
            });
            return promise;
        }else{
            dispatch(error({
                ...notificationOpts,
                title:"Error",
                message:"Please login after create a post project."
            }));
        }
        return currentUser;
    }
}