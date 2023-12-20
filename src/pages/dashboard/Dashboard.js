import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import
{
	Col,
	Row,
	Progress,
	Button,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	FormGroup,
	FormText,
	Input
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import ApexActivityChart from "./components/ActivityChart.js";

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

import s from "./Dashboard.module.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

const Dashboard = () =>
{
	const [ checkboxes, setCheckboxes ] = useState( [ true, false ] )
	const [ title, setTitle ] = useState( "Home" )

	const toggleCheckbox = ( id ) =>
	{
		setCheckboxes( checkboxes => checkboxes
			.map( ( checkbox, index ) => index === id ? !checkbox : checkbox ) )
	}

	const meals = [ meal1, meal2, meal3 ];

	useEffect( () =>
	{
		if ( window.location.href.includes( "dashboard" ) )
		{
			setTitle( "Home" )
		} else if ( window.location.href.includes( "friend" ) )
		{
			setTitle( "List Friend" )
		} else if ( window.location.href.includes( "save" ) )
		{
			setTitle( "Save" )
		} else if ( window.location.href.includes( "group-message" ) )
		{
			setTitle( "Froup Messages" )
		} else
		{
			setTitle( "Message" )
		}
	} )

	return (
		<div>
			<Row>
				<Col className="pr-grid-col" xs={ 12 } lg={ 8 }>
					<div className="mx-auto text-center">
						<Link to="/" ><i className="eva eva-home-outline text-center" style={ { fontSize: '50px' } }></i></Link>
					</div>
					<Row className="gutter mb-4">
						<Col xs={ 12 } md={ 12 }>
							<Widget className="widget-p-md text-center">
								<h3 className="p-1 text-left">{ title }</h3>
								{ title == "Home" &&
									<img className="p-1 img-fluid" width={ 500 } height={ 500 } src={ upgradeImage } alt="..." />
								}
							</Widget>
						</Col>
					</Row>
					{ title == "Home" && <Row className="gutter mb-4">
						<Col xs={ 12 }>
							<Widget className="widget-p-md">
								<div className="px-">
									<div className="d-flex">
										<img className={ s.image } width={ 30 } height={ 30 } src={ user } alt="..." />
										<p>example@gmail.com</p>
									</div>
									<div className="w-75 mx-auto">
										<FormGroup className="my-3">
											<Input
												id="email"
												className="input-transparent pl-3"
												value={ "Bạn đang nghĩ gì" }
												type="textarea"
												rows={ 5 }
												required
												name="email"
												placeholder="Bạn đang nghĩ gì"
											/>
										</FormGroup>
									</div>
									<div className="d-flex justify-content-between my-4">
										<Button className="rounded-pill mr-3" color="primary">Photo/Video</Button>
										<Button className="rounded-pill body-3" outline color="dark">Feeling/Activity</Button>
									</div>
								</div>
							</Widget>
						</Col>
					</Row> }
					<Row className="gutter">
						<Col xs={ 12 } md={ 12 }>
							<Widget className="widget-p-md">
								{ meals.map( ( meal ) =>
									<div key={ uuidv4() } className={ `mt-4 ${ s.widgetBlock }` }>
										<div className={ s.widgetBody }>
											<div className="d-flex">
												<img className="img-fluid mr-2" src={ meal } alt="..." />
												<div className="d-flex flex-column">
													<p className="body-2">{ title } Blog hot</p>
													<p className="body-3 muted">progress</p>
												</div>
											</div>
											<div className="body-3 muted">
												15/2/2023
											</div>
										</div>
									</div>
								) }

								{ [ ...Array( 5 ) ].map( ( item, key ) =>
								{
									return <div key={ key } className={ `mt-3 ${ s.widgetBlock }` }>
										<div className={ s.widgetBody }>
											<div className="d-flex">
												<img className="img-fluid mr-2" src={ gymIcon } alt="..." />
												<div className="d-flex flex-column">
													<p className="body-2">{ title } Blog hot</p>
													<p className="body-3 muted">From mr.{ key }</p>
												</div>

											</div>
											<div className="body-3 muted">
												15/2/2023
											</div>
										</div>
									</div>
								} ) }
							</Widget>
						</Col>

					</Row>
				</Col>
				<Col className="mt-4 mt-lg-0 pl-grid-col" xs={ 12 } lg={ 4 }>
					<Widget className="widget-p-lg bg-none">
						<div className="bg-white">
							<p className="headline-3">Friend Request</p>
							{ [ ...Array( 5 ) ].map( ( item, key ) =>
							{
								return <div key={ key } className={ `mt-3 ${ s.widgetBlock }` }>
									<div className={ s.widgetBody }>
										<div className="d-flex">
											<img className="img-fluid mr-2" src={ gymIcon } alt="..." />
											<div className="d-flex flex-column">
												<p className="body-2">02.11 , 12:00 - 13:00</p>
												<p className="body-3 muted">Yoga, Airplace Gym</p>
											</div>
										</div>
										<div className="checkbox checkbox-primary">
											<input
												id={ "checkbox" + key }
												type="checkbox"
												className="styled"
												checked={ checkboxes[ key ] }
												onChange={ () => toggleCheckbox( key ) }
											/>
											<label htmlFor={ "checkbox" + key } />
										</div>
									</div>
								</div>
							} ) }
						</div>

						<div className="bg-white mt-5">
							<p className="headline-3">List message</p>
							{ [ ...Array( 5 ) ].map( ( item, key ) =>
							{
								return <div key={ key } className={ `mt-3 ${ s.widgetBlock }` }>
									<div className={ s.widgetBody }>
										<div className="d-flex">
											<img className="img-fluid mr-2" src={ gymIcon } alt="..." />
											<div className="d-flex flex-column">
												<p className="body-2">02.11 , 12:00 - 13:00</p>
												<p className="body-3 muted">From mr.{ key }</p>
											</div>
										</div>
										<div className="checkbox checkbox-primary">
											<input
												id={ "checkbox" + key }
												type="checkbox"
												className="styled"
												checked={ checkboxes[ key ] }
												onChange={ () => toggleCheckbox( key ) }
											/>
											<label htmlFor={ "checkbox" + key } />
										</div>
									</div>
								</div>
							} ) }
						</div>

					</Widget>
				</Col>
			</Row>
		</div>
	)
}

export default Dashboard;
