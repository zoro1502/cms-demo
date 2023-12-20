import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import
{
	Container,
	Row,
	Col,
	Button,
	FormGroup,
	FormText,
	Input,
} from "reactstrap";
import Widget from "../../components/Widget/Widget";
import Footer from "../../components/Footer/Footer";
import { account, loginUser } from "../../actions/auth";
import hasToken from "../../services/authService";

import loginImage from "../../assets/loginImage.svg";
import SofiaLogo from "../../components/Icons/SofiaLogo.js";
import GoogleIcon from "../../components/Icons/AuthIcons/GoogleIcon.js";
import TwitterIcon from "../../components/Icons/AuthIcons/TwitterIcon.js";
import FacebookIcon from "../../components/Icons/AuthIcons/FacebookIcon.js";
import GithubIcon from "../../components/Icons/AuthIcons/GithubIcon.js";
import LinkedinIcon from "../../components/Icons/AuthIcons/LinkedinIcon.js";

const ForgetPassword = ( props ) =>
{

	const [ state, setState ] = useState( {
		email: 'admin',
		code: ''
	} );


	const [ error, setError ] = useState( '' );
	const [ isReset, setIsReset ] = useState( false );

	const doLogin = ( e ) =>
	{
		e.preventDefault();
		if ( state.email != account.email )
		{
			setError( 'Tên đăng nhập không khớp' );
			return;
		}
		if ( isReset == false )
		{
			setIsReset( true );
			return;
		}
		if(isReset && state.code != account.code) {
			setError( 'Mã xác thực không chính xác' );
			return;
		}
		window.location.href = '/password/reset'
	}

	const changeCreds = ( event ) =>
	{
		setState( { ...state, [ event.target.name ]: event.target.value } );
		setError( '' );
	}

	return (
		<div className="auth-page d-flex">
			<Container className="col-12 d-flex justify-content-center align-items-center">
				<Row className="d-flex align-items-center">
					{/* <Col xs={ 0 } lg={ 6 } className="right-column">
						<div>
							<img src={ loginImage } alt="Error page" />
						</div>
					</Col> */}
					<Col xs={ 12 } lg={ 12 } className="left-column">
						<Widget className="widget-auth widget-p-lg">
							<div className="d-flex align-items-center justify-content-between py-3">
								<p className="auth-header mb-0 text-center">Quên mật khẩu</p>
								<div className="logo-block">
									<SofiaLogo />
								</div>
							</div>
							<form onSubmit={ ( event ) => doLogin( event ) }>

								{ isReset ?
									<FormGroup className="my-3">
										<FormText className="mb-2">Mã xác thực</FormText>
										<Input
											id="code"
											className="input-transparent pl-3"
											value={ state.code }
											onChange={ ( event ) => changeCreds( event ) }
											type="text"
											required
											name="code"
											placeholder="Mã xác thực của bạn"
										/>
									</FormGroup> : <>
										<FormGroup className="my-3">
											<FormText className="mb-2">Tên đăng nhập</FormText>
											<Input
												id="email"
												className="input-transparent pl-3"
												value={ state.email }
												onChange={ ( event ) => changeCreds( event ) }
												type="text"
												required
												name="email"
												placeholder="Tên đăng nhập của bạn"
											/>
										</FormGroup>

									</>
								}
								<p className="text-danger">{error}</p>
								<div className="bg-widget d-flex justify-content-center">
									{
										isReset ? 
										<div className="row">
											<Button className="rounded-pill my-3 col-12" type="submit" color="success">Xác thực</Button>
											<Button className="rounded-pill my-3 col-12" type="submit" color="primary">Nhận mã xác thực</Button>
										</div>
										: <Button className="rounded-pill my-3" type="submit" color="primary">Nhận mã xác thực</Button>
									}
									
								</div>
								<p className="text-center">(Mã xác thực được gửi đến email của bạn)</p>

							</form>
						</Widget>
					</Col>
					{/* <Col xs={ 0 } lg={ 6 } className="right-column">
						<div>
							<img src={ loginImage } alt="Error page" />
						</div>
					</Col> */}
				</Row>
			</Container>
			<Footer />
		</div>
	)
}


ForgetPassword.propTypes = {
	dispatch: PropTypes.func.isRequired,
}

function mapStateToProps ( state )
{
	return {
		isFetching: state.auth.isFetching,
		isAuthenticated: state.auth.isAuthenticated,
		errorMessage: state.auth.errorMessage,
	};
}

export default withRouter( connect( mapStateToProps )( ForgetPassword ) );
