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

export const Blogs = () =>
{
	

	return (
		<div className="mt-5">
			<Row>
				<Col className="pr-grid-col" xs={ 12 }>
					<Row>
						<Col xs={ 12 } md={ 4 }>
							<div className="w-100 mb-4">
								<button className="btn btn-primary w-100">Đăng story</button>
							</div>
							<div className="w-100 mb-4 d-flex flex-wrap">
								{ [ ...Array( 10 ) ].map( ( item, key ) =>
								{
									return <img key={key} src={ meal1 } style={ { width: "80px", height: '80px' } } />
								} ) }
							</div>
						</Col>
						<Col xs={ 12 } md={ 8 }>
							<div className="w-100 mb-4">
								<button className="btn btn-outline-info w-100">Đăng bài</button>
							</div>
							<div className="w-100 mb-4">
								{ [ ...Array( 2 ) ].map( ( item, key ) =>
								{
									return <div key={key} className="mt-3">
										<h2>Tiêu đề bài viết ${key}</h2>
										<p> Notice the use of %PUBLIC_URL% in the tags above.
											It will be replaced with the URL of the `public` folder during the build.
											Only files inside the `public` folder can be referenced from the HTML.

											Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
											work correctly both with client-side routing and a non-root public URL.
											Learn how to configure a non-root public URL by running `npm run build`.</p>
									</div>
								} ) }
								<div className="mt-3 d-flex justify-content-end">
									<Link to={'/'}>
									<i className="eva eva-home-outline text-center" style={ { fontSize: '50px' } }></i>
									</Link>
								</div>
							</div>
						</Col>
					</Row>

				</Col>

			</Row>
		</div>
	)
}

