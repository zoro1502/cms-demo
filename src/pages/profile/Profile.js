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
	CardText
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
import { Blogs } from "./Blogs.js";
import { Friends } from "./ListFriends.js";
import { ImagesVideos } from "./Images.js";
import { DetailProfile } from "./DetailProfile.js";
import { message } from "antd";

const Profile = () =>
{
	const [ activeTab, setTabValue ] = useState( "1" );
	const [ tabLinks, setTabLinks ] = useState( [
		{
			id: "1",
			title: "Bài viết"
		},
		{
			id: "2",
			title: "Giới thiệu"
		},
		{
			id: "3",
			title: "Bạn bè"
		},
		{
			id: "4",
			title: "Ảnh"
		},
		{
			id: "5",
			title: "Video"
		},
		{
			id: "6",
			title: "Setting"
		}
	] );
	const [ title, setTitle ] = useState( "Home" )



	const meals = [ meal1, meal2, meal3 ];
	const toggle = ( value ) =>
	{
		setTabValue( value )
	}


	return (
		<div className="container ">
			<Row>
				<Col className="pr-grid-col" xs={ 12 }>

					<Row className="gutter mb-4" style={ { height: "500px" } }>
						<Col xs={ 12 } md={ 12 } >
							<Widget className="widget-p-md text-center">
								<div style={ { position: "relative", border: "1px solid" } }>
									<div>
										<img src={ '/static/media/user.3ff01505.svg' } height={ 300 } width={ 500 } alt="User" />
									</div>
									<div style={ { position: "absolute", bottom: "10px", padding: "30px", right: "30px" } }>
										<button className="btn btn-outline-info" onClick={ () =>
										{
											message.success( "Chỉnh sửa ảnh bìa thành công" )
										} }>Chỉnh sửa</button>
									</div>
									<div style={ { position: "absolute", bottom: "-100px", left: "30px" } }>
										<img src={ '/static/media/user.3ff01505.svg' } height={ 200 } width={ 200 } alt="User" />
									</div>
								</div>
								{
									!window.location.href.includes( 'profile' ) &&
									<div className="d-flex justify-content-end mt-5">
										<button className="btn btn-primary mr-2" onClick={ () =>
										{
											message.success( "Gửi mời thành công" )
										} }>Gửi lời mời kết bạn</button>
										<button className="btn btn-outline-info" onClick={ () =>
										{
											message.success( "Nhắn tin thành công" )
										} }>Nhắn tin</button>
									</div>
								}
							</Widget>
						</Col>
					</Row>
					<div className="container gutter bg-white mb-4">
						<Nav tabs>
							{
								tabLinks?.map( ( item, key ) =>
								{
									if ( !window.location.href.includes( 'profile' ) )
									{
										if ( item.id !== "6" )
										{
											return <NavItem key={ key }>
												<NavLink
													className={ classnames( { active: activeTab === item.id } ) }
													onClick={ () => { toggle( item.id ); } }
												>
													{ item.title }
												</NavLink>
											</NavItem>
										}

									} else
									{
										return <NavItem key={ key }>
											<NavLink
												className={ classnames( { active: activeTab === item.id } ) }
												onClick={ () => { toggle( item.id ); } }
											>
												{ item.title }
											</NavLink>
										</NavItem>
									}

								} )
							}
						</Nav>
						<TabContent activeTab={ activeTab }>
							<TabPane tabId="1">
								<Blogs />
							</TabPane>
							<TabPane tabId="2">
								<DetailProfile />

							</TabPane>
							<TabPane tabId="3">
								<Friends />
							</TabPane>
							<TabPane tabId="4">
								<ImagesVideos type={ 'image' } />
							</TabPane>
							<TabPane tabId="5">
								<ImagesVideos type={ 'image' } />
							</TabPane>
							<TabPane tabId="6">
								<ImagesVideos type={ 'image' } />
							</TabPane>
						</TabContent>
					</div>
				</Col>

			</Row>
		</div>
	)
}

export default Profile;
