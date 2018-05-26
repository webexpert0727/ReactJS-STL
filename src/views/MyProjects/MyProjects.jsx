import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import Main from '../../components/layout/main';
import Header from '../../components/layout/header';
import FooterOther from '../../components/layout/footer-other';
import defaultProjectImage from '../../assets/images/no-product.png';

class MyProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount(){
        const { fetchProjects } = this.props;
        fetchProjects();
    }
    render() {
        const { projects,isLoading} = this.props;
        let totals = 0;
        return (
            <Main>
               <div className="container-fluid">
                    <Header />
                    <div className="banner banner-project banner-small  no-text-banner">
                        <div className="text text-center">
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div> 
                <div className="card-layout-1 my-projects card-margin-style-1" styles="padding-top: 30px;">
                    <div className="container">
                        <div className="clearfix col-lg-12">
                            <div className="col-xs-4 top-btn-container">
                                <h3 className="plain-heading my-projects-heading">My projects</h3>
                            </div>
                            <div className="col-xs-8 text-right top-btn-container">
                                <Link to="/post-project" className="button blue type-2 round-3 no-shadow no-margin"> CREATE NEW PROJECT</Link>   
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="my-project-container">
                                <div className="table-responsive ">
                                    <table className="table my-projects-table">
                                        <thead>
                                            <tr>
                                                <td colSpan="2">ADDED ITEM</td>
                                                <td>SIZE</td>
                                                <td>QUANTITY</td>
                                                <td>WEIGHT</td>
                                                <td>PRICE</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <BlockUi
                                                tag="div"
                                                blocking={isLoading}
                                            >
                                            <tbody>
                                                {
                                                    _.map(projects,(project) => {
                                                        totals = (Number(totals) + Number(project.cost));
                                                        return (
                                                            <tr key={project.objectId}>
                                                                <td data-title="ADDED ITEM" className=" project-image">
                                                                    <img src={project.image ? project.image.url():defaultProjectImage} width="70px" height="70px" alt="" />
                                                                </td>
                                                                <td data-title="" className=" project-name">
                                                                        <p>
                                                                            {project.title}
                                                                            <span>{project.destination}</span>
                                                                        </p>
                                                                </td>
                                                                <td data-title="SIZE" className=" project-size">{project.height} X {project.lenght}</td>
                                                                <td data-title="QUANTITY" className=" project-quentity">
                                                                    <div className="border">4</div>
                                                                </td>
                                                                <td data-title="WEIGHT" className=" project-weight">{project.weight} kg</td>
                                                                <td data-title="PRICE"  className=" project-price">$ {project.cost}</td>
                                                                <td  className="project-status">
                                                                    <img src="images/check-box-check.png" width="30px" height="30px"  alt="" />
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </BlockUi>
                                        <tfoot>
                                            <tr className="total-tr">
                                                <td colSpan="5"></td>
                                                <td data-title="Total">
                                                    <p className="total"><sup>$</sup>{totals} <sup>00</sup></p>
                                                </td>
                                                <td></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterOther />
            </Main>
        )
    }
}
 
export default MyProjects;