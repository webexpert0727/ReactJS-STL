import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class MyProjects extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />
            <div class="banner banner-project banner-small  no-text-banner">
                <div class="text text-center">
                    <h3>
                        
                    </h3>
                    <p>
                        
                    </p>
                </div>
            </div>

        </div>
        <div class="">
            <div class="card-layout-1 my-projects card-margin-style-1" styles="padding-top: 30px;">
                <div class="container">
                    <div class="clearfix col-lg-12">
                        <div class="col-xs-4 top-btn-container">
                            <h3 class="plain-heading my-projects-heading">My projects</h3>
                        </div>
                        <div class="col-xs-8 text-right top-btn-container">
                            <a href="#" class="button blue type-2 round-3 no-shadow no-margin "> CREATE NEW PROJECT </a>      
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="my-project-container">
                            <div class="table-responsive ">
                                <table class="table my-projects-table">
                                    <thead>
                                        <tr>
                                            <td colspan="2">ADDED ITEM</td>
                                            <td>SIZE</td>
                                            <td>QUANTITY</td>
                                            <td>WEIGHT</td>
                                            <td>PRICE</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-title="ADDED ITEM" class=" project-image">
                                               <img src="images/pr-1.png" width="70px" height="70px" alt="" />
                                            </td>
                                            <td data-title=" " class=" project-name">
                                                <div>
                                                    <p class=" ">
                                                        Antonis
                                                        <span>Cyprus</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td data-title="SIZE" class=" project-size">20 X 20</td>
                                            <td data-title="QUANTITY" class=" project-quentity">
                                                <div class="border">4</div>
                                            </td>
                                            <td data-title="WEIGHT" class=" project-weight">2.3 kg</td>
                                            <td data-title="PRICE"  class=" project-price">$ 230</td>
                                            <td  class=" project-status">
                                                <img src="images/check-box-check.png" width="30px" height="30px"  alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-title="ADDED ITEM"  class=" project-image">
                                                <img src="images/pr-2.png" width="70px" height="70px" alt="" /> 
                                            </td>
                                            <td data-title=" "  class=" project-name">
                                                <div>
                                                    <p class=" ">
                                                        Anna 
                                                        <span>Hungary</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td data-title="SIZE"  class=" project-size">35 X 35</td>
                                            <td data-title="QUANTITY"  class=" project-quentity">
                                                <div class="border">2</div>
                                            </td>
                                            <td data-title="WEIGHT"  class=" project-weight">1.9 kg</td>
                                            <td data-title="PRICE"  class=" project-price">$ 169</td>
                                            <td  class=" project-status">
                                                <img src="images/check-box-check.png" width="30px" height="30px"  alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-title="ADDED ITEM" class=" project-image">
                                                <img src="images/pr-3.png" width="70px" height="70px" alt="" />
                                            </td>
                                            <td data-title=" " class=" project-name">
                                                <div>
                                                    <p class=" ">Caroline
                                                        <span>England</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td data-title="SIZE" class=" project-size">13 X 19</td>
                                            <td data-title="QUANTITY" class=" project-quentity">
                                                <div class="border">1</div>
                                            </td>
                                            <td data-title="WEIGHT" class=" project-weight">0.7 kg</td>
                                            <td data-title="PRICE" class=" project-price">$74</td>
                                            <td>
                                                <img src="images/check-box-check-grey.png" width="30px" height="30px"  alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-title="ADDED ITEM" class=" project-image">
                                               <img src="images/pr-1.png" width="70px" height="70px" alt="" />
                                            </td>
                                            <td data-title=" " class=" project-name">
                                                <div>
                                                    <p class=" ">
                                                        Antonis
                                                        <span>Cyprus</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td data-title="SIZE" class=" project-size">20 X 20</td>
                                            <td data-title="QUANTITY" class=" project-quentity">
                                                <div class="border">4</div>
                                            </td>
                                            <td data-title="WEIGHT" class=" project-weight">2.3 kg</td>
                                            <td data-title="PRICE"  class=" project-price">$ 230</td>
                                            <td  class=" project-status">
                                                <img src="images/check-box-check.png" width="30px" height="30px"  alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-title="ADDED ITEM"  class=" project-image">
                                                <img src="images/pr-2.png" width="70px" height="70px" alt="" /> 
                                            </td>
                                            <td data-title=" "  class=" project-name">
                                                <div>
                                                    <p class=" ">
                                                        Anna 
                                                        <span>Hungary</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td data-title="SIZE"  class=" project-size">35 X 35</td>
                                            <td data-title="QUANTITY"  class=" project-quentity">
                                                <div class="border">2</div>
                                            </td>
                                            <td data-title="WEIGHT"  class=" project-weight">1.9 kg</td>
                                            <td data-title="PRICE"  class=" project-price">$ 169</td>
                                            <td  class=" project-status">
                                                <img src="images/check-box-check.png" width="30px" height="30px"  alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-title="ADDED ITEM" class=" project-image">
                                                <img src="images/pr-3.png" width="70px" height="70px" alt="" />
                                            </td>
                                            <td data-title=" " class=" project-name">
                                                <div>
                                                    <p class=" ">Caroline
                                                        <span>England</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td data-title="SIZE" class=" project-size">13 X 19</td>
                                            <td data-title="QUANTITY" class=" project-quentity">
                                                <div class="border">1</div>
                                            </td>
                                            <td data-title="WEIGHT" class=" project-weight">0.7 kg</td>
                                            <td data-title="PRICE" class=" project-price">$74</td>
                                            <td>
                                                <img src="images/check-box-check-grey.png" width="30px" height="30px"  alt="" />
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr class="total-tr">
                                            <td colspan="5"></td>
                                            <td data-title="Total">
                                                <p class="total"><sup>$</sup>3,252 <sup>00</sup></p>
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
        </div>

        <FooterOther />

    </Main>
		);
	}
}

export default MyProjects;