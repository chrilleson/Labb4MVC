import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
            <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={'/'}>Labb4MVC</Link>

                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <a href="http://localhost:49540/Account/Login"> Login </a>
                        </li>
                        <li>
                            <a href="http://localhost:49540/Account/Register"> Register </a>
                        </li>
                        <br />
                        <li>
                            <NavLink to={'/Labb4/quiz'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Quiz
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/counter'} activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Counter
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchdata'} activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Fetch data
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Labb4/AdminQuestions'} activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Administrera Fr&#229;gor
                            </NavLink>
                        </li>
                    </ul>
                    <button className='btn btn-primary' onClick={this.logout}>Logga ut</button>
                </div>
            </div>
        </div>;
    }

    logout() {
        window.location.href = 'Account/Login';
    }
}
