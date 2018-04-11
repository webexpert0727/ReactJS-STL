import React, { Component } from 'react';

import Main from './layout/main';
import HeaderWhite from './layout/header-white';
import FooterOther from './layout/footer-other';


class Agreement extends Component {
	render() {
		return (
		<div className="main off-white-bg no-banner">
        <div className="container-fluid">
            <HeaderWhite />
        </div>
        <div className="container-fluid">
            <div className="gap clearfix" style={{marginBottom : "3px"}}></div>
            <div className="sm-gap-80 text-center-xs" style={{padding : "0 50px"}}><h3 className="plain-heading-2" styles="margin-top: 23px; margin-bottom: 0px;"> Agreement </h3></div>
            <br/>
            <div className="white-bg round5">
                <div className="agreement-text">
                    <p>
                        The standard Lorem Ipsum passage, used since the 1500s 
                    </p>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt at labore on dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi at aliquip ex ea commodo consequat. Dais ante irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <p>
                        Section 1.10.32 of "de Finibus Bonorum on Malorum", written by Cicero in 45 BC
                    </p>
                    <p>
                        "Sod at perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventors veritatis on quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odic aut fugit, sed quia consequuntur magni dolores eos qui rations voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt at labore on dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi at aliquid ex ea commodi consequatur? Quis autem vel sum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem sum fugiat quo voluptas nulla pariatur?"
                    </p>
                    <p>
                        1914 translation by H. Rackham
                    </p>
                    <p>
                        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are
                    </p>
                </div>
            </div>
            <br/>
            <div className="text-right text-center-xs agreement-btn">
                <a href="#" className="button type-1 grey text-uppercase">Decline</a>
                <a href="#" className="button type-2 green text-uppercase"> agree</a>
            </div>
        </div>
        <FooterOther />
    </div>
		);
	}
}

export default Agreement;