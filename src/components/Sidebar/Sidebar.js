import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup/LinksGroup.js";
import { changeActiveSidebarItem } from "../../actions/navigation.js";
import SofiaLogo from "../Icons/SofiaLogo.js";
import cn from "classnames";
import userImg from "../../assets/user.svg";
import SearchBarIcon from '../Icons/HeaderIcons/SearchBarIcon.js';
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

const Sidebar = ( props ) =>
{

	const {
		activeItem = '',
		...restProps
	} = props;

	const [ burgerSidebarOpen, setBurgerSidebarOpen ] = useState( false )

	useEffect( () =>
	{
		if ( props.sidebarOpened )
		{
			setBurgerSidebarOpen( true )
		} else
		{
			setTimeout( () =>
			{
				setBurgerSidebarOpen( false )
			}, 0 );
		}
	}, [ props.sidebarOpened ] )

	return (
		<nav className={ cn( s.root, { [ s.sidebarOpen ]: burgerSidebarOpen } ) }
			style={ { width: '300px', transform: 'translateX(-300px)' } } >
			<header className={ s.logo + ' d-block mb-5 mt-3' }>
				<Form className="d-none d-sm-block" inline>
					<FormGroup>
						<InputGroup className='input-group-no-border navbar py-3'>
							<Input id="search-input" placeholder="Search " className='focus' />
							<InputGroupAddon addonType="prepend" className='ml-1'>
								<span>
									<SearchBarIcon />
								</span>
							</InputGroupAddon>
						</InputGroup>
					</FormGroup>
				</Form>

			</header>
			<div className='w-100 mt-5 mb-3' style={ { borderBottom: '1px ' } }>
				<Link to="/profile">
					<span className={ `${ s.avatar } rounded-circle w-100  mr-2` }>
						<img src={ userImg } alt="User" className='text-center w-100' />
					</span>
				</Link>
			</div>
			<ul className={ s.nav + " mt-5" } >
				<LinksGroup
					onActiveSidebarItemChange={ activeItem => props.dispatch( changeActiveSidebarItem( activeItem ) ) }
					activeItem={ props.activeItem }
					header="Friend"
					className="border sidebar-hover mb-3"
					isHeader
					iconName={ <i className={ 'eva eva eva-person' } /> }
					link="/template/friend"
					index="Friend"
				/>
				<LinksGroup
					onActiveSidebarItemChange={ activeItem => props.dispatch( changeActiveSidebarItem( activeItem ) ) }
					activeItem={ props.activeItem }
					header="Message"
					className="border sidebar-hover mb-3"
					isHeader
					iconName={ <i className={ 'eva eva eva-person' } /> }
					link="/template/message"
					index="Message"
				/>
				<LinksGroup
					onActiveSidebarItemChange={ activeItem => props.dispatch( changeActiveSidebarItem( activeItem ) ) }
					activeItem={ props.activeItem }
					header="Group-message"
					className="border sidebar-hover mb-3"
					isHeader
					iconName={ <i className={ 'eva eva eva-person' } /> }
					link="/template/group-message"
					index="Group-message"
				/>
				<LinksGroup
					onActiveSidebarItemChange={ activeItem => props.dispatch( changeActiveSidebarItem( activeItem ) ) }
					activeItem={ props.activeItem }
					header="Saved"
					className="border sidebar-hover mb-3"
					isHeader
					iconName={ <i className={ 'eva eva eva-person' } /> }
					link="/template/save"
					index="Saved"
				/>
				{/* <h5 className={ s.navTitle }>TEMPLATE</h5>
				<LinksGroup
					onActiveSidebarItemChange={ activeItem => props.dispatch( changeActiveSidebarItem( activeItem ) ) }
					activeItem={ props.activeItem }
					header="Typography"
					isHeader
					iconName={ <i className={ 'eva eva-text-outline' } /> }
					link="/template/typography"
					index="typography"
				/>
				<LinksGroup
					onActiveSidebarItemChange={ activeItem => props.dispatch( changeActiveSidebarItem( activeItem ) ) }
					activeItem={ props.activeItem }
					header="Tables"
					isHeader
					iconName={ <i className={ 'eva eva-grid-outline' } /> }
					link="/template/tables"
					index="tables"
				/>
				<LinksGroup
					onActiveSidebarItemChange={ activeItem => props.dispatch( changeActiveSidebarItem( activeItem ) ) }
					activeItem={ props.activeItem }
					header="Notifications"
					isHeader
					iconName={ <i className={ 'eva eva-bell-outline' } /> }
					link="/template/notifications"
					index="notifications"
				/>
				<LinksGroup
					onActiveSidebarItemChange={ activeItem => props.dispatch( changeActiveSidebarItem( activeItem ) ) }
					activeItem={ props.activeItem }
					header="UI Elements"
					isHeader
					iconName={ <i className={ 'eva eva-cube-outline' } /> }
					link="/template/uielements"
					index="uielements"
					childrenLinks={ [
						{
							header: 'Charts', link: '/template/ui-elements/charts',
						},
						{
							header: 'Icons', link: '/template/ui-elements/icons',
						},
						{
							header: 'Google Maps', link: '/template/ui-elements/maps',
						},
					] }
				/> */}
			</ul>
			<div className="bg-widget d-flex mt-auto ml-1">
				<Button className="rounded-pill my-3 body-2 d-none d-md-block" type="submit" color="secondary-red">Unlock Full Version</Button>
			</div>
		</nav>
	);
}

Sidebar.propTypes = {
	sidebarOpened: PropTypes.bool,
	dispatch: PropTypes.func.isRequired,
	activeItem: PropTypes.string,
	location: PropTypes.shape( {
		pathname: PropTypes.string,
	} ).isRequired,
}

function mapStateToProps ( store )
{
	return {
		sidebarOpened: store.navigation.sidebarOpened,
		activeItem: store.navigation.activeItem,
	};
}

export default withRouter( connect( mapStateToProps )( Sidebar ) );
