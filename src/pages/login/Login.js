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
import { toast } from "react-toastify";


const Login = ( props ) =>
{

	const [ state, setState ] = useState( {
		email: 'admin',
		password: '123456',
	} )

	const doLogin = ( e ) =>
	{
		e.preventDefault();
		props.dispatch( loginUser( { password: state.password, email: state.email } ) );
		if ( state.email != account.email || state.password != account.password )
		{
			toast.error( 'Tên đăng nhập hoặc mật khẩu không khớp', {
				autoClose: 4000,
				closeButton: false,
				hideProgressBar: true,
				style: {
					background: '#dc3545',
					padding: '10px'
				}
			} );
		} else {
			toast.success( 'Đăng nhập thành công', {
				autoClose: 4000,
				closeButton: false,
				hideProgressBar: true,
				style: {
					background: '#198754',
					padding: '10px'
				},
				onClose: () => {
					window.location.href = '/'
				}
			} );
			
		}

	}

	const changeCreds = ( event ) =>
	{
		setState( { ...state, [ event.target.name ]: event.target.value } )
	}

	return (
		<div className="auth-page">
			<Container className="col-12">
				<Row className="d-flex align-items-center">
					<Col xs={ 0 } lg={ 6 } className="right-column">
						<div>
							<img src={ loginImage } alt="Error page" />
						</div>
					</Col>
					<Col xs={ 12 } lg={ 6 } className="left-column">
						<Widget className="widget-auth widget-p-lg">
							<div className="d-flex align-items-center justify-content-between py-3">
								<p className="auth-header mb-0 text-center">Login</p>
								<div className="logo-block">
									<SofiaLogo />
								</div>
							</div>
							<form onSubmit={ ( event ) => doLogin( event ) }>
								<FormGroup className="my-3">
									<FormText>Tên đăng nhập</FormText>
									<Input
										id="email"
										className="input-transparent pl-3"
										value={ state.email }
										onChange={ ( event ) => changeCreds( event ) }
										type="text"
										required
										name="email"
										placeholder="Tên đăng nhập"
									/>
								</FormGroup>
								<FormGroup className="my-3">
									<FormText>Password</FormText>
									<Input
										id="password"
										className="input-transparent pl-3"
										value={ state.password }
										onChange={ ( event ) => changeCreds( event ) }
										type="password"
										required
										name="password"
										placeholder="Password"
									/>
									<div className="d-flex justify-content-between">

										<Link to="/password/forget">Quên mật khẩu?</Link>
									</div>
								</FormGroup>
								<div className="bg-widget d-flex justify-content-between align-items-center">
									<Button className="rounded-pill my-3" type="submit" color="secondary-red">Đăng nhập</Button>
									<Link to="/register" className="btn btn-primary rounded-pill my-3">Đăng ký</Link>
								</div>

							</form>
						</Widget>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	)
}


Login.propTypes = {
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

export default withRouter( connect( mapStateToProps )( Login ) );
