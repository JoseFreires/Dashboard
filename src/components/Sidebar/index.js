import React from 'react';
import './style.css';
import logo from '../../assets/logo_P.png';

const Sidebar =({ sidebarOpen, closeSidebar}) => {
    return (
        <div className={ sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                    <h1>Livraria do Zé</h1>
                </div>
                <i
                onClick={() => closeSidebar}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">Área Administrativa</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building"></i>
                    <a href="#">Lojas</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Produtos</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-bars"></i>
                    <a href="#">Categorias</a>
                </div>

                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
