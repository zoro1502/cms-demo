import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import
{
	Col,
	Row,
	Button,
	FormGroup,
	Input,
	Nav,
	NavItem,
	NavLink,
	TabContent,
	TabPane,
	Card,
	CardTitle,
	CardText,
	FormText
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";

import meal1 from "../../assets/dashboard/meal-1.svg";
import meal2 from "../../assets/dashboard/meal-2.svg";
import meal3 from "../../assets/dashboard/meal-3.svg";
import upgradeImage from "../../assets/dashboard/upgradeImage.svg";
import heartRed from "../../assets/dashboard/heartRed.svg";
import heartTeal from "../../assets/dashboard/heartTeal.svg";
import heartViolet from "../../assets/dashboard/heartViolet.svg";
import heartYellow from "../../assets/dashboard/heartYellow.svg";
import gymIcon from "../../assets/dashboard/gymIcon.svg";
import therapyIcon from "../../assets/dashboard/therapyIcon.svg";
import user from "../../assets/user.svg";
import statsPie from "../../assets/dashboard/statsPie.svg";

import s from "../dashboard/Dashboard.module.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import classnames from 'classnames';
import { Modal, message } from "antd";

export const Friends = ( props ) =>
{

	const changeCreds = ( e ) =>
	{
		console.log( e?.target?.value );
	}

	const status = window.location.href.includes( "profile" );

	const [ open, setOpen ] = useState( false );

	return (
		<div className="mt-5">
			{
				!window.location.href.includes( 'profile' ) && <div className="mx-auto text-center">
					<Link to="/" ><i className="eva eva-home-outline text-center" style={ { fontSize: '50px' } }></i></Link>
				</div>
			}
			<Row>
				<Col xs={ 12 }>
					<Row>
						<Col md={ 6 }>
							<FormGroup className="my-3">
								<Input
									id="email"
									className="input-transparent pl-3 w-75"
									onChange={ ( event ) => changeCreds( event ) }
									type="text"
									required
									name="email"
									placeholder="Tìm kiếm bạn bè"
								/>
							</FormGroup>
						</Col>
						{
							window.location.href.includes( "profile" ) && <Col md={ 6 }>
								<div className="d-flex justify-content-end">
									<button className="btn btn-primary" onClick={ () =>
									{
										setOpen( true )
									} }>Xem lời mời kết bạn</button>
								</div>
							</Col>
						}
					</Row>

				</Col>
				{ [ ...Array( 10 ) ].map( ( item, key ) =>
				{
					return <Col md={ 6 }> <div key={ key } className="d-flex align-items-center my-4 py-4">
						<div className="avatar">
							<Link to="/user-detail">
								<img src={ user }
									style={ { width: "100px", height: "100px", border: '1px solid', borderRadius: '10px' } } />
							</Link>
						</div>
						<div className="ml-2">
							<Link to="/user-detail"><h5>Bạn bè ${ key }</h5></Link>

						</div>
					</div>
					</Col>
				} ) }

				<Modal
					centered
					open={ open }
					onCancel={ () => setOpen( false ) }
					footer={ null }
					width={ 1000 }

				>
					<h2 className="text-center">Lời mời kết bạn</h2>
					<div style={ { maxHeight: "500px", overflow: "scroll" } }>

						<Row>
							{ [ ...Array( 10 ) ].map( ( item, key ) =>
							{
								return <Col md={ 4 }>
									<div key={ key } className="d-flex align-items-center my-4 py-4">
										<div className="avatar">
											<Link to="/user-detail">
												<img src={ user }
													style={ { width: "100px", height: "100px", border: '1px solid', borderRadius: '10px' } } />
											</Link>
										</div>
										<div className="ml-2">
											<Link to="/user-detail"><h5>Bạn bè ${ key }</h5></Link>

										</div>
									</div>
									<div className="d-flex flex-column">
										<button className="btn btn-primary mb-2" onClick={ () =>
										{
											message.success( "Thêm bạn bè thành công" );
										} }>Đồng ý</button>
										<button className="btn btn-secondary mb-2" onClick={ () =>
										{
											message.success( "Xóa thành công" );
										} }>Xóa</button>
									</div>
								</Col>
							} ) }
						</Row>
					</div>
				</Modal>

			</Row>
		</div>
	)
}

