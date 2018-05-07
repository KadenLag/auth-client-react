import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <a href="/auth/google">Login</a>;
            default:
                return <a href="/api/logout">Logout</a>;
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <Link
                            to={this.props.auth ? '/dashboard' : '/'}
                            className="left brand-logo"
                        >
                            Logo
                        </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="badges.html">Navigation</a></li>
                            <li>{this.renderContent()}</li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
