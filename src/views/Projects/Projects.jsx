import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Main from '../../components/layout/main';
import Header from '../../components/layout/header';
import FooterOther from '../../components/layout/footer-other';
import defaultProjectImage from '../../assets/images/no-product.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price:[10,1000],
            weight: [10,1000]
        }
        this.handlePriceSliderChange = this
        .handlePriceSliderChange
        .bind(this);
        this.handleWeightSliderChange = this.handleWeightSliderChange.bind(this);
    }
    componentWillMount(){
        const { fetchProjects } = this.props;
        fetchProjects();
    }
    handlePriceSliderChange(value) {
        const { fetchProjects } = this.props;
        this.setState({ price: value });
        fetchProjects({price: value});
    }
    handleWeightSliderChange(value) {
        const { fetchProjects } = this.props;
        this.setState({ weight: value });
        fetchProjects({weight: value});
    }
    render() {
        const { projects, isLoading } = this.props;
        return (
            <Main>
                <div className="container-fluid">
                    <Header />
                    <div className="banner banner-travel-search banner-small no-text-banner banner-cus-1-xs">
                        <div className="text text-center">
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="card-layout-1 card-margin-style-1 projects-container">
                    <div className="container">
                        <div>
                            <h1 className="plain-heading heading-style-3">Projects</h1>
                        </div>
                        <div className="row">
                            <div className="projects-sidebar sidebar">
                                <aside>
                                    <div className="accordian sidebar-block" >
                                        <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-1">Price</p>
                                        <div className="collapse-containt collapse in" id="side-1">
                                            <div className="clearfix">
                                                <div className="range clearfix " styles="padding-right: 0" >
                                                    <input type="text" value={`$${this.state.price[0]}`} readOnly={true} className="pull-left" />
                                                    <input type="text" value={`$${this.state.price[1]}`} readOnly={true} className="pull-right text-right" />
                                                </div>
                                                <Range
                                                    min={10}
                                                    max={1000}
                                                    onChange={this.handlePriceSliderChange}
                                                    allowCross={false}
                                                    defaultValue={[10, 1000]}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordian sidebar-block">
                                        <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-2">Weight</p>
                                        <div className="collapse-containt collapse" id="side-2">
                                            <div className="clearfix">
                                                <div className="range clearfix" >
                                                    <input type="text" value={`${this.state.weight[0]}cm`} readOnly={true} className="pull-left" />
                                                    <input type="text" value={`${this.state.weight[1]}cm`} readOnly={true}className="pull-right text-right" />
                                                    <br/><br/>
                                                </div>
                                                <Range
                                                    min={10}
                                                    max={1000}
                                                    onChange={this.handleWeightSliderChange}
                                                    allowCross={false}
                                                    defaultValue={[10, 1000]}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gap"> </div>
                                </aside>
                            </div>
                            <div className=" main-container projects-main-container">
                                <BlockUi
                                 tag="div"
                                 blocking={isLoading}
                                >
                                    <div className="products-container">
                                        <div className="grid-layout ">
                                            <div className="product-layout-3 row">
                                                {_.map(projects,(project) => {
                                                    return (
                                                        <div key={project.objectId} className="product-div col-sm-4 text-left">
                                                            <div className="contain">
                                                                <div className="image-wrapper">
                                                                    <Link to={`/project-detail/${project.objectId}`}>
                                                                        <img 
                                                                            src={project.image ? project.image.url():defaultProjectImage}
                                                                            alt={project.title}
                                                                            className="img-responsive center-block" 
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="clearfix" >
                                                                    <div className="product-name col-xs-9 no-padding">
                                                                        <p className="no-padding text-capitalize">
                                                                            {project.title}
                                                                            <span className="text-capitalize">{project.destination}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-xs-3 no-padding">
                                                                        <p className="project-price text-right no-padding">${project.cost || 0.00}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </BlockUi>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterOther />
            </Main>
        )
    }
}

export default Projects;

