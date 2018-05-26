import React, { Component } from 'react';
import { compose } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import Main from '../../components/layout/main';
import Header from '../../components/layout/header';
import FooterOther from '../../components/layout/footer-other';
const lacationArr = [
    {lat:23.0049117,lng:72.5540815},
    {lat:23.012145,lng:72.54962},
    {lat:23.0044673,lng:72.5531159},
]
const MapWithAMarker = compose(
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 23.0201818, lng: 72.4396542 }}
    >
     {
        lacationArr.map((location,index) => {
            return (
                <Marker
                    key={index}
                    position={location}
                />
            )
        })
     }
    </GoogleMap>
  );
class Travellers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price:[10,1000],
            weight: [10,1000],
            distance: [10,1000]
        }
        this.handlePriceSliderChange = this.handlePriceSliderChange.bind(this);
        this.handleWeightSliderChange = this.handleWeightSliderChange.bind(this);
        this.handleDistanceSliderChange = this.handleDistanceSliderChange.bind(this);
    }
    handlePriceSliderChange(value) {
        this.setState({ price: value });
    }
    handleWeightSliderChange(value) {
        this.setState({ weight: value });
    }
    handleDistanceSliderChange(value){
        this.setState({ distance: value });
    }
    render() { 
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
                <div className="card-layout-1  card-map-container card-margin-style-1">
                <div className="map">
                        <div className="white-bg travel-sidebar" styles="height: 100%; overflow: auto;">
                            <aside>
                                <div className="filter-reset">
                                    <h3>Filter
                                        {/* <a href="/#/" className="filter-reser-button pull-right">
                                            <img src="images/icons8-synchronize.png" />
                                        </a> */}
                                    </h3>
                                </div>
                                <div className="accordian sidebar-block">
                                    <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-4">Price</p>
                                    <div className="collapse-containt collapse" id="side-4">
                                        <br/>
                                        <div className="clearfix">
                                            <div className="range">
                                                <Range
                                                    min={10}
                                                    max={1000}
                                                    onChange={this.handlePriceSliderChange}
                                                    allowCross={false}
                                                    defaultValue={[10, 1000]}
                                                />
                                                <input type="text" value={`$${this.state.price[0]}`} readOnly={true} className="pull-left" />
                                                <input type="text" value={`$${this.state.price[1]}`} readOnly={true}className="pull-right text-right" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="accordian sidebar-block">
                                    <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-1">Category</p>
                                    <div className="collapse-containt collapse in" id="side-1">
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-1-ch1" />
                                            <label htmlFor="side-1-ch1">All</label>
                                        </div>
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-1-ch2" />
                                            <label htmlFor="side-1-ch2">Category 1</label>
                                        </div>
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-1-ch3" />
                                            <label htmlFor="side-1-ch3">Category 2</label>
                                        </div>
                                        <div className="sidebar-checkbox">
                                            <input type="checkbox" name="" id="side-1-ch4" />
                                            <label htmlFor="side-1-ch4">Category 3</label>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="accordian sidebar-block" >
                                        <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-1-ch7" >Distance</p>
                                        <div className="collapse-containt collapse in" id="side-1-ch7">
                                            <div className="clearfix">
                                                <div className="range">
                                                    <Range
                                                        min={10}
                                                        max={1000}
                                                        onChange={this.handleDistanceSliderChange}
                                                        allowCross={false}
                                                        defaultValue={[10, 1000]}
                                                    />
                                                    <input type="text" value={`${this.state.distance[0]}`} readOnly={true} className="pull-left" />
                                                    <input type="text" value={`${this.state.distance[1]}`} readOnly={true}className="pull-right text-right" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div className="accordian sidebar-block">
                                    <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-2">Weight</p>
                                    <div className="collapse-containt collapse " id="side-2">
                                        <br/>
                                        <div className="clearfix">
                                            <div className="range">
                                                <Range
                                                    min={10}
                                                    max={1000}
                                                    onChange={this.handleWeightSliderChange}
                                                    allowCross={false}
                                                    defaultValue={[10, 1000]}
                                                />
                                                <input type="text" value={`${this.state.weight[0]}cm`} readOnly={true} className="pull-left" />
                                                <input type="text" value={`${this.state.weight[1]}cm`} readOnly={true}className="pull-right text-right" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="accordian sidebar-block">
                                    <p className="collapse-heading sidebar-heading" data-toggle="collapse" data-target="#side-3">Query</p>
                                    <div className="collapse-containt collapse" id="side-3">
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch1" />
                                                <label htmlFor="side-3-ch1"><span styles="background: #202020;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch2" />
                                                <label htmlFor="side-3-ch2"><span styles="background: #fc0000;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch3" />
                                                <label htmlFor="side-3-ch3"><span styles="background: #4100bb;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch4" />
                                                <label htmlFor="side-3-ch4"><span styles="background: #deee00;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch5" />
                                                <label htmlFor="side-3-ch5"><span styles="background: #00a380;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch6" />
                                                <label htmlFor="side-3-ch6"><span styles="background: #861daf;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch1" />
                                                <label htmlFor="side-3-ch1"><span styles="background: #d4c4c4;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch2" />
                                                <label htmlFor="side-3-ch2"><span styles="background: #4d0909;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch3" />
                                                <label htmlFor="side-3-ch3"><span styles="background: #1a0642;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch4" />
                                                <label htmlFor="side-3-ch4"><span styles="background: #383b04;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch5" />
                                                <label htmlFor="side-3-ch5"><span styles="background: #073a2f;"></span></label>
                                            </div>
                                            <div className="sidebar-checkbox color">
                                                <input type="checkbox" name="" id="side-3-ch6" />
                                                <label htmlFor="side-3-ch6"><span styles="background: #2c083a;"></span></label>
                                            </div>
                                    </div>
                                </div> */}
                            </aside>
                        </div>
                        <div className="travel-main" styles="height: 100%;">
                        <MapWithAMarker
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `683px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                        </div>
                    </div>
                </div>
                <FooterOther/>
            </Main>
        )
    }
}
 
export default Travellers;