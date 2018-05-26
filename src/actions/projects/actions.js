import _ from 'lodash';
import Parse from 'parse';
import * as a from './actionTypes';
Parse.initialize("kgMoNAcxUBHJIo9KUVQqcjYOZvpZv4fR4pky1zJH", "je5obIpZemmDCQ1ivZqcZaj7vpUNVFQtvjElbpAi"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

export const fetchProjects = (params) => {
    return dispatch => {
        dispatch({
            type: a.FETCH_PROJECTS_REQUEST
        });
        const promise = new Parse.Query("Project");
        if(!_.isEmpty(params)){
            if(params.hasOwnProperty("price")){
                const { price } = params;
                promise.greaterThan("cost", price[0].toString());
                promise.lessThan("cost", price[1].toString());
            }
            if(params.hasOwnProperty("weight")){
                const { weight } = params;
                promise.greaterThan("Weight", weight[0].toString());
                promise.lessThan("Weight", weight[1].toString());
            }
        }
        promise.find().then(function(results) {
            const projects = [];
            if(!_.isEmpty(results)){
                _.map(results,(project) => {
                    projects.push({
                        objectId: project.id,
                        title: project.get('Title'),
                        weight: project.get("Weight"),
                        cost: project.get('cost'),
                        description: project.get('description'),
                        destination: project.get('destination'),
                        address: project.get("address"),
                        height: project.get("height"),
                        lenght: project.get("lenght"),
                        image: project.get('ProjectImage'),
                    })
                })
            }
            dispatch({
                type:a.FETCH_PROJECTS_SUCCESS,
                payload:projects
            })
        },(e) => {
            dispatch({
                type:a.FETCH_PROJECTS_FAILURE,
                payload:e.message
            })
          });
        return promise;
    }
}

export const fetchProjectDetails = objectId => {
    return dispatch => {
        dispatch({
            type:a.FETCH_PROJECT_DETAILS_REQUEST
        });
        const promise = new Parse.Query("Project");
        promise.equalTo("objectId", objectId);
        promise.first().then(function(result) {
            let project = {};
            if(!_.isEmpty(result)){
                project = {
                    objectId: result.id,
                    title: result.get('Title'),
                    weight: result.get("Weight"),
                    cost: result.get('cost'),
                    description: result.get('description'),
                    destination: result.get('destination'),
                    address: result.get("address"),
                    height: result.get("height"),
                    lenght: result.get("lenght"),
                };
            }
            dispatch({
                type:a.FETCH_PROJECT_DETAILS_SUCCESS,
                project
            });
        },
        (e) => {
            dispatch({
                type:a.FETCH_PROJECTS_FAILURE,
                payload:e.message
            })
        });
        return promise;
    }
}
