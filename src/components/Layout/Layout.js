// -- React and related libs
import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";

// -- Third Party Libs
import PropTypes from "prop-types";

// -- Custom Components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadbrumbs/Breadcrumbs";
import Dashboard from "../../pages/dashboard/Dashboard";
import Typography from "../../pages/typography/Typography";
import Notifications from "../../pages/notifications/Notifications";
import Tables from "../../pages/tables/Tables";
import Charts from "../../pages/uielements/charts/Charts";
import Icons from "../../pages/uielements/icons/IconsPage";
import Maps from "../../pages/uielements/maps/google/GoogleMapPage";

// -- Component Styles
import s from "./Layout.module.scss";
import Profile from "../../pages/profile/Profile";
import { Friends } from "../../pages/profile/ListFriends";

const Layout = ( props ) =>
{
	let location = props.location.pathname;
	return (
		<div className={ s.root }>
			<Header />
			<div className={ s.wrap } style={ { marginLeft: !location.includes( 'profile' ) ? '300px' : '0' } }>
				{
					!location.includes( 'profile' ) ?
						<>
							
							<Sidebar />
						</>
						: <></>
				}
				<main className={ s.content }>
					<Breadcrumbs url={ props.location.pathname } />
					<Switch>
						<Route path="/template" exact render={ () => <Redirect to="template/dashboard" /> } />
						<Route path="/template/dashboard" exact component={ Dashboard } />
						<Route path="/template/profile" exact component={ Profile } />
						<Route path="/template/user-detail" exact component={ Profile } />
						<Route path="/template/message" exact component={ Dashboard } />
						<Route path="/template/save" exact component={ Dashboard } />
						<Route path="/template/friend" exact component={ Friends } />
						<Route path="/template/group-message" exact component={ Dashboard } />
						<Route path="/template/typography" exact component={ Typography } />
						<Route path="/template/tables" exact component={ Tables } />
						<Route path="/template/notifications" exact component={ Notifications } />
						<Route path="/template/ui-elements" exact render={ () => <Redirect to={ "/template/ui-elements/charts" } /> } />
						<Route path="/template/ui-elements/charts" exact component={ Charts } />
						<Route path="/template/ui-elements/icons" exact component={ Icons } />
						<Route path="/template/ui-elements/maps" exact component={ Maps } />
						<Route path='*' exact render={ () => <Redirect to="/error" /> } />
					</Switch>
				</main>
				<Footer />
			</div>
		</div>
	);
}

Layout.propTypes = {
	sidebarOpened: PropTypes.bool,
	dispatch: PropTypes.func.isRequired,
}

function mapStateToProps ( store )
{
	return {
		sidebarOpened: store.navigation.sidebarOpened,
	};
}

export default withRouter( connect( mapStateToProps )( Layout ) );
