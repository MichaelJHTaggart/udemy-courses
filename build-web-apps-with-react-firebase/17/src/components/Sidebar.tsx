import React from 'react';
import './Sidebar.css';
import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';
import { useSelector } from 'react-redux';
import { selectUserState } from '../store/selectors/user';

const Sidebar = () => {
  const user = useSelector(selectUserState);

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.user.photoURL} />
          <p>Hey user</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
