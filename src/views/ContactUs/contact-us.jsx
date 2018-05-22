import React, {Component} from 'react'
import { Field } from 'redux-form'
import Notifications from 'react-notification-system-redux';
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import Main from '../../components/layout/main';
import Header from '../../components/layout/header';
import FooterOther from '../../components/layout/footer-other';

const normalizePhone = value => {
    if (!value) {
      return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length <= 3) {
      return onlyNums
    }
    if (onlyNums.length <= 7) {
      return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
    }
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(
      6,
      10
    )}`
}

class ContactUs extends Component {
    constructor(props) {
        super(props)
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
                    <textarea {...field.input} cols="30" rows="10" placeholder={field.placeholder}></textarea>
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
            <div className="input">
                {fieldContent}
            </div>
        )
    }
    onSubmit(values) {
        console.log(values)
        const { addContact } = this.props;
        addContact(values);
    }
    render() {
        const { handleSubmit, submitting, pristine, notifications, isLoading } = this.props;
        console.log(this.props)
        return (
            <Main>
                <Notifications notifications={notifications}/>
                <div className="container-fluid">
                    <Header/>
                    <div className="banner banner-contact banner-small  no-text-banner">
                        <div className="text text-center">
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div
                    className="card-layout-1 style-layout-1 card-margin-style-1  no-padding-xs"
                    styles="padding-top: 6px;">
                    <div className="container  no-padding-sm">
                        <div className="gap"></div>
                        <div className="small-container-2">
                            <div className="col-md-8 col-sm-6">
                                <h3
                                    className="title default-title"
                                    styles="margin-top: 8px;margin-bottom: 7px;"
                                >
                                    Send us a message
                                </h3>
                                <div className="form-type-3 form-container no-padding">
                                    <BlockUi
                                        tag="div"
                                        blocking={isLoading}
                                    >
                                        <div className="form">
                                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                                <div className="info">
                                                    <p>You can contuct us with anything related to our Products. We&#39;ll get in
                                                        touch with you as soon as possible.</p>
                                                </div>
                                                <Field
                                                    name="name"
                                                    type="text"
                                                    placeholder="Your name"
                                                    component={this.renderField}
                                                />
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email address"
                                                    component={this.renderField}
                                                />
                                                <Field
                                                    name="phone"
                                                    type="text"
                                                    placeholder="Phone"
                                                    component={this.renderField}
                                                    normalize={normalizePhone}
                                                />
                                                <Field
                                                    name="message"
                                                    type="textarea"
                                                    placeholder="Your message"
                                                    component={this.renderField}
                                                />
                                                <div className="text-center">
                                                    <br/>
                                                    <button
                                                        type="submit"
                                                        className="button type-2 default-blue no-shadow text-uppercase"
                                                        disabled={pristine || submitting}>Contact Us</button>
                                                </div>
                                                <div className="clearfix"></div>
                                            </form>
                                        </div>
                                    </BlockUi>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="gap"></div><br/>
                                <div className="gap clearfix xs-hidden"></div>
                                <div className="gap xs-hidden"></div>
                                <div className="address ">
                                    <h4><img src="images/icons8-marker.png" alt=""/>
                                        Find us at the office</h4>
                                    <p>First street, 74
                                        <br/>
                                        1234 Budapest
                                        <br/>
                                        Hungary</p>
                                </div>
                                <div className="address ">
                                    <h4><img src="images/icons8-phone.png" alt=""/>
                                        Give us a ring</h4>
                                    <p>John Smith
                                        <br/>
                                        +12 3456789012
                                        <br/>
                                        Mon-Fri, 8:00-18:00</p>
                                </div>
                                <div className="address ">
                                    <h4><img src="images/icons8-briefcase.png" alt=""/>
                                        Legal Information</h4>
                                    <p>Share The Load Ltd.
                                        <br/>
                                        VAT - AB123456789
                                        <br/>
                                        IBAN - AB111122223333444
                                        <br/>
                                        Bank - Alpha Bank</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix gap" styles="margin-bottom: 13px;"></div>
                    <div className="chat-popup">
                        <div className="heading">
                            <span className="online"></span>
                            <p>Chat with us, we are online
                                <span></span>
                                <span></span>
                                <span></span>
                            </p>
                        </div>
                        <div className="body text-center" styles="display: none;">
                            <a href="chat.html" className="button type-2 blue">
                                chat
                            </a>
                        </div>
                    </div>
                </div>
                <FooterOther />
            </Main>
        );
    }
}

export default ContactUs;