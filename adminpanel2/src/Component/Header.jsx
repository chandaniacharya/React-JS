import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Header() {






    const redirect = useNavigate();
    const [form, setform] = useState({
        id: "",
        name: "",
        password: ""
    })






    const logout = () => {

        localStorage.removeItem('name');
        alert('Logout Successfull !');
        redirect('/');
    }
    return (
        <div className='skin-blue'><header className="main-header">
            {/* Logo */}
            <a href="index2.html" className="logo"><b>ADMIN PANEL</b></a>
            {/* Header Navbar: style can be found in header.less */}
            <nav className="navbar navbar-static-top" role="navigation">
                {/* Sidebar toggle button*/}
              
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        {/* Messages: style can be found in dropdown.less*/}


                        {/* User Account: style can be found in dropdown.less */}
                        <li className="dropdown user user-menu">
                            <NavLink to="/" >





                                {(() => {
                                    if (localStorage.getItem('id')) {
                                        return (
                                            <a href="javascript:void(0)" onClick={logout} className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">login<i className="fa fa-arrow-right ms-3" /></a>
                                        )
                                    }
                                    else {
                                        return (
                                            <Link to="/" style={{ color: "white" }}>logout</Link>
                                        )
                                    }
                                })()}






                            </NavLink>

                        </li>
                    </ul>
                </div>
            </nav>
        </header>
            {/* Left side column. contains the logo and sidebar */}
            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">






                            {(() => {
                                if (localStorage.getItem('name')) {
                                    return (
                                        <p className="mb-0 ms-3">  {localStorage.getItem('name')}</p>
                                    )
                                }
                            })()}








                            <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                        </div>
                    </div>

                    {/* sidebar menu: : style can be found in sidebar.less */}
                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>

                        <li className="treeview">
                            <NavLink to="/dashboard">
                                <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                            </NavLink>

                        </li>


                        <li className="treeview">
                            <NavLink to="/form">
                                <i className="fa fa-edit" /> <span>Forms</span>
                            </NavLink>

                        </li>
                        <li className="treeview">
                            <NavLink to="/table">
                                <i className="fa fa-table" /> <span>Tables</span>
                            </NavLink>
                            </li>
                        </ul>


                </section>
                {/* /.sidebar */}
            </aside>
          
   
            </div>

    )
}

export default Header