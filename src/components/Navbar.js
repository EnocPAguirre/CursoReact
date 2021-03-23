import React, {Component} from 'react';

import logo from '../images/logo.svg'


class NavBar extends React.Component {

    render() {
        return(
            <div>
                <a href="/">
                    <img src={logo} alt="logo"/>
                    <span>Platzi</span>
                    <span>Conf</span>
                </a>
            </div>
        );
    }

}

export default NavBar;