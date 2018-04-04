import React, { Component } from 'react';

import Main from './layout/main';
import Header from './layout/header';
import FooterOther from './layout/footer-other';

class BookFlightConfirm extends Component {
	render() {
		return (
		<Main>

        <div class="container-fluid">
            <Header />

            <div class="banner banner-book-flight-confirm no-text-card-up-high">
            </div>

        </div>
        <div class="book_flight_confirm_wrapper text-center">
            <div class=" card-layout-2 ">
                <h2> Thank you to choosing us!</h2>
                <img src="images/book-flite-success.png" class="img-responsive center-block" styles="width: 460px;" />
                <p>We are sending a confirmation email very soon <br/>Enjoy your flight!</p>
                <a href="index.html" class="button default-blue-2 no-shadow type-2">Home </a>
            </div>
        </div>

    </Main>
		);
	}
}

export default BookFlightConfirm;