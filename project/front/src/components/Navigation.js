import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import logo from '../static/logo.png'
import "../App.css";
import {NavLink} from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';


const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            />
            <span><span style={{ fontSize:30 }}>M A K E_B L O G S</span> <sub>#1</sub> </span>
        </Navbar.Brand>
    </Navbar>

    <div className='sidebar'>
    <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Services
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/creators" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Creators List</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/manage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">Manage Blogs</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/blog" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sticky-note">Blogs</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>

    </div>
    
  );
};

export default Navigation;