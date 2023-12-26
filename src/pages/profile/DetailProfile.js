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
	Form,
	Label
} from "reactstrap";

export const DetailProfile = ( props ) =>
{
	const [ profile, setProfile ] = useState( {
		id: "1",
		name: "Khách hàng",
		email: "customer@gmail.com",
		phone_number: "0987654321",
		address_work: "",
		dob: "",
		address: "",
	} );



	return (
		<Row className="container widget-p-md p-5">
			<Col className="pr-grid-col" xs={ 12 }>
				<Form>
					<Row>
						<FormGroup className="col-md-6 d-flex align-items-center align-items-center">
							<Label className="text-nowrap mb-0" >Full name</Label>
							<Input type="text" value={profile.name} className="border-0" name="name" id="exampleFullName" placeholder="with a placeholder" />
						</FormGroup>
						<FormGroup className="col-md-6 d-flex align-items-center">
							<Label className="text-nowrap mb-0">Email</Label>
							<Input type="email" value={profile.email} className="border-0" name="email" id="exampleEmail" placeholder="with a placeholder" />
						</FormGroup>
						<FormGroup className="col-md-6 d-flex align-items-center">
							<Label className="text-nowrap mb-0">Phone Number</Label>
							<Input type="text" value={profile.phone_number} className="border-0" name="phone_number" id="exampleEmail" placeholder="with a placeholder" />
						</FormGroup>
						<FormGroup className="col-md-6 d-flex align-items-center">
							<Label className="text-nowrap mb-0">Nơi làm việc</Label>
							<Input type="text" value={profile.address_work} className="border-0" name="address_working" id="exampleEmail" placeholder="with a placeholder" />
						</FormGroup>
						<FormGroup className="col-md-6 d-flex align-items-center">
							<Label className="text-nowrap mb-0">Sinh nhật</Label>
							<Input type="date" className="border-0" name="dob" id="exampleEmail" placeholder="with a placeholder" />
						</FormGroup>
						<FormGroup className="col-md-6 d-flex align-items-center">
							<Label className="text-nowrap mb-0">Sống tại</Label>
							<Input type="text" value={profile.address} className="border-0" name="address" id="exampleEmail" placeholder="with a placeholder" />
						</FormGroup>
					</Row>

				</Form>
			</Col>
		</Row>
	)

}

