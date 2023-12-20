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
import Widget from "../../components/Widget/Widget.js";
import Footer from "../../components/Footer/Footer.js";

import loginImage from "../../assets/registerImage.svg";
import SofiaLogo from "../../components/Icons/SofiaLogo.js";
import GoogleIcon from "../../components/Icons/AuthIcons/GoogleIcon.js";
import TwitterIcon from "../../components/Icons/AuthIcons/TwitterIcon.js";
import FacebookIcon from "../../components/Icons/AuthIcons/FacebookIcon.js";
import GithubIcon from "../../components/Icons/AuthIcons/GithubIcon.js";
import LinkedinIcon from "../../components/Icons/AuthIcons/LinkedinIcon.js";
import { registerUser } from "../../actions/register.js";
import hasToken from "../../services/authService";
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";


const Register = ( props ) =>
{
	const [ state, setState ] = useState( {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		userName: '',
		phone: '',
		confirmPassword: '',
	} );

	const [ error, setError ] = useState( {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		userName: '',
		phone: '',
		confirmPassword: '',
	} );

	const history = useHistory();

	const changeCred = ( event ) =>
	{
		setState( { ...state, [ event.target.name ]: event.target.value } );
		changeError({
			name: event.target.name,
			value: ""
		});
	}

	const changeError = ( event ) =>
	{
		console.log(event);
		setError( { ...error, [ event.name ]: event.value } )
	}

	const doRegister = ( event ) =>
	{
		event.preventDefault();
		let statusCheck = true;
		if(state.password != state.confirmPassword) {
			changeError({
				name: "confirmPassword",
				value: "Mật khẩu không khớp"
			});
			statusCheck = false;
		}
		if(statusCheck == false) return;
		toast.success("Đăng ký thành công", {
			autoClose: 2000,
			closeButton: false,
			hideProgressBar: true,
			type: 'success',
			style: {
				background: '#198754',
				padding: '10px'
			},
			onClose: () => {
				window.location.href = '/login'
			}
		});
		
		// props.dispatch( registerUser( {
		// 	creds: state,
		// 	history: props.history,
		// } ) )
	}

	const { from } = props.location.state || { from: { pathname: '/template' } }

	//   if (hasToken(JSON.parse(localStorage.getItem('authenticated')))) {
	//     return (
	//       <Redirect to={from} />
	//     );
	//   }

	return (
		<div className="auth-page">
			<Container className="col-12">
				<Row className="d-flex align-items-center">
					<Col xs={ 12 } lg={ 6 } className="left-column">
						<Widget className="widget-auth widget-p-lg">
							<div className="d-flex align-items-center justify-content-between py-3">
								<p className="auth-header mb-0">Đăng ký</p>
								<div className="logo-block">
									<SofiaLogo />
								</div>
							</div>

							<form onSubmit={ ( event => doRegister( event ) ) }>
								<div className="my-3 row">
									<FormGroup className="col-12 col-md-6">
										<FormText>First Name</FormText>
										<Input
											id="firstName"
											className="input-transparent pl-3"
											value={ state.firstName }
											onChange={ ( event ) => changeCred( event ) }
											type="text"
											required
											name="firstName"
											placeholder="First Name"
										/>
									</FormGroup>
									<FormGroup className="col-12 col-md-6">
										<FormText>Last Name</FormText>
										<Input
											id="lastName"
											className="input-transparent pl-3"
											value={ state.lastName }
											onChange={ ( event ) => changeCred( event ) }
											type="text"
											required
											name="lastName"
											placeholder="Last Name"
										/>
									</FormGroup>
								</div>
								<FormGroup className="my-3">
									<FormText>Tên đăng nhập</FormText>
									<Input
										id="userName"
										className="input-transparent pl-3"
										value={ state.userName }
										onChange={ ( event ) => changeCred( event ) }
										type="text"
										required
										name="userName"
										placeholder="Tên đăng nhập"
									/>
								</FormGroup>
								<FormGroup className="my-3">
									<FormText>Số điện thoại</FormText>
									<Input
										id="phone"
										className="input-transparent pl-3"
										value={ state.phone }
										onChange={ ( event ) => changeCred( event ) }
										type="text"
										required
										name="phone"
										placeholder="Số điện thoại"
									/>
								</FormGroup>
								<FormGroup className="my-3">
									<FormText>Email</FormText>
									<Input
										id="email"
										className="input-transparent pl-3"
										value={ state.email }
										onChange={ ( event ) => changeCred( event ) }
										type="email"
										required
										name="email"
										placeholder="Email"
									/>
								</FormGroup>
								<FormGroup className="my-3">
									<div className="d-flex justify-content-between">
										<FormText>Mật khẩu</FormText>
									</div>
									<Input
										id="password"
										className="input-transparent pl-3"
										value={ state.password }
										onChange={ ( event => changeCred( event ) ) }
										type="password"
										required
										name="password"
										placeholder="Mật khẩu"
									/>
									<FormText className="mt-1">(Gồm tối thiểu 8 ký tự bao gồm số, chữ hoa, chữ thường)</FormText>
									{error.password != '' && <p className="text-danger">{error.password}</p>}
								</FormGroup>
								<FormGroup className="my-3">
									<div className="d-flex justify-content-between">
										<FormText>Xác nhận mật khẩu</FormText>
									</div>
									<Input
										id="confirmPassword"
										className="input-transparent pl-3"
										value={ state.confirmPassword }
										onChange={ ( event => changeCred( event ) ) }
										type="password"
										required
										name="confirmPassword"
										placeholder="Xác nhận mật khẩu"
									/>
									{error.confirmPassword != '' && <p className="text-danger">{error.confirmPassword}</p>}

								</FormGroup>
								<div className="bg-widget d-flex justify-content-between align-items-center">
									<Button className="rounded-pill my-3" type="submit" color="secondary-red">Đăng ký</Button>
									<Link to="/login" className="btn btn-primary rounded-pill my-3">Đăng nhập</Link>
								</div>
							</form>
						</Widget>
					</Col>
					<Col xs={ 0 } lg={ 6 } className="right-column">
						<div>
							<img src={ loginImage } alt="Error page" />
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	)
}

Register.propTypes = {
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

export default withRouter( connect( mapStateToProps )( Register ) );
