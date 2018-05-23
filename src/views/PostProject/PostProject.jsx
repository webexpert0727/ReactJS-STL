import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form'
import Notifications from 'react-notification-system-redux';
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import Main from '../../components/layout/main';
import Header from '../../components/layout/header';
import FooterOther from '../../components/layout/footer-other';

class PostProject extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }
    renderField(field) {
        const {
            meta: {
                touched,
                error
            }
        } = field;
        let fieldContent;
        switch (field.type) {
            case 'textarea':
                fieldContent = (
                    <textarea {...field.input} cols="48" rows="5" placeholder={field.placeholder}></textarea>
                )
                break;
            default:
                fieldContent = (
                    <input
                    type={field.type}
                    placeholder={field.placeholder}
                    {...field.input}/>
                )
                break;
        }        
        return (
            <div className="input text-1">
                <label htmlFor="">{field.label}</label>
                {fieldContent}
            </div>
        )
    }
    onSubmit(values) {
        const { addProject, history } = this.props;
        addProject(values,() => history.push("/my-projects"));
    }
    render() {
        const { handleSubmit, submitting, pristine, notifications, isLoading } = this.props;
        console.log(this.props)
        return (
            <Main>
                <Notifications notifications={notifications}/>
                <div className="container-fluid">
                    <Header />
                    <div className="banner banner-travel-search banner-small no-text-banner banner-cus-1-xs">
                        <div className="text text-center">
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="card-layout-1 post-project-container">
                    <div className="container checkout">
                        <div>
                            <h1 className="plain-heading text-center">Post Project</h1>
                        </div>
                        <div className="clearfix gap hidden-xs"></div>
                        <div className="row">
                            <div className="col-md-6 post-project-container-1">
                                <div className="text-center card-layout-1 text-left-xs post-project-type-card" >
                                    <h3>Type 1</h3>
                                    <p>In which traveler is responsible for picking up parcel from sender's locarion and delivering to it destination, in this case, traveler make $ per weight and also per KM (distance from traveler current location to parcel pickup location)
                                        </p>
                                </div>
                                <div className="gap clearfix hidden-xs hidden-sm" styles="margin-bottom: 17px;"></div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-md-6 text-center  post-project-container-2">
                                <div className="text-center text-left-xs  post-project-type">
                                    <h3>Type 2</h3>
                                    <p>In which traveler is responsible for only delivering the parcel to destination and sender have to give parcel to traveler, in this case, Traveler make only per KG and only destination is entered by sender while posting the project, 
                                        </p>
                                </div>
                                <div className="gap clearfix hidden-xs hidden-sm"></div><div className="gap clearfix hidden-xs" styles="margin-bottom: 27px;"></div>
                            </div>
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <BlockUi
                                    tag="div"
                                    blocking={isLoading}
                                >
                                    <div className="row">
                                        <div className="col-md-12">   
                                            <div className="col-md-6 post-project-container-1 no-padding-xs">
                                                <div className="post-project-inputs">
                                                    <Field
                                                        name="Title"
                                                        type="text"
                                                        label="PROJECT NAME:"
                                                        placeholder="Project Name"
                                                        component={this.renderField}
                                                    />
                                                    <Field
                                                        name="destination"
                                                        type="text"
                                                        label="DESTINATION:"
                                                        placeholder="Destination"
                                                        component={this.renderField}
                                                    />
                                                    <Field
                                                        name="address"
                                                        type="text"
                                                        label="ADDRESS:"
                                                        placeholder="Your Address"
                                                        component={this.renderField}
                                                    />
                                                    <Field
                                                        name="lenght"
                                                        type="text"
                                                        label="LENGHT OF PARCEL:"
                                                        placeholder="Parcel lenght cm"
                                                        component={this.renderField}
                                                    />
                                                    <Field
                                                        name="height"
                                                        type="text"
                                                        label="HEIGHT OF PARCEL:"
                                                        placeholder="Parcel height cm"
                                                        component={this.renderField}
                                                    />
                                                    <Field
                                                        name="Weight"
                                                        type="text"
                                                        label="WEIGHT OF PARCEL:"
                                                        placeholder="Parcel Weight kg"
                                                        component={this.renderField}
                                                    />
                                                    <Field
                                                        name="cost"
                                                        type="text"
                                                        label="PARCEL PRICE:"
                                                        placeholder="Parcel Price"
                                                        component={this.renderField}
                                                    />
                                                    <Field
                                                        name="description"
                                                        type="textarea"
                                                        label="DESCRIPTION:"
                                                        placeholder="Description"
                                                        component={this.renderField}
                                                    />
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="col-md-6 text-center  post-project-container-2">
                                                <p className="info low">Your current balance: <span className="amount low"> $ 19.00</span></p>
                                                <p className="estimited">ESTIMATED COST:&nbsp;&nbsp;&nbsp;<span className="amount"><sup>$ </sup>37<sup> 00</sup></span></p>
                                                <div className="gap clearfix"></div>
                                                <div className="gap clearfix hidden-sm hidden-xs" styles="margin-bottom: 24px;"></div>
                                                <div>
                                                    <Link
                                                    to="/my-projects"
                                                    className="button type-1 grey text-uppercase"
                                                    >CANCEL</Link>
                                                    <button 
                                                    type="submit" 
                                                    style={{cursor:"pointer"}}
                                                    className="button type-2 green text-uppercase" 
                                                    disabled={pristine || submitting}>POST NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </BlockUi>
                            </form>
                        </div>
                    </div>
                </div>
                <FooterOther />
            </Main>
        )
    }
}
 
export default PostProject;