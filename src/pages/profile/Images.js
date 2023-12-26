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

export const ImagesVideos = ( props ) =>
{


	return (
		<div className="mt-5">
			<Row>
				<Col className="pr-grid-col" xs={ 12 }>
					<div className="w-100 mb-4 d-flex flex-wrap">
						{ [ ...Array( 30 ) ].map( ( item, key ) =>
						{
							return <div  key={ key } className="mr-2 mb-2" style={{border: '1px solid', borderRadius: "10px"}}>
								<img src={ meal1 } className="" style={ { width: "200px", height: '200px' } } />
							</div>
						} ) }
					</div>
				</Col>

			</Row>
		</div>
	)
}

