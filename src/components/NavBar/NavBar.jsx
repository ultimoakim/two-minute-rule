import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import UserLogOut from '../UserLogOut/UserLogOut';
import './NavBar.css';

export default function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav className="top-bar">
            <Link to="/reports">Report History</Link>
            &nbsp; | &nbsp;
            <Link to="/reports/new">New Report</Link>
            &nbsp; | &nbsp;
            <Link to="/">Welcome, {user.name}!</Link>
            &nbsp; | &nbsp;
            <UserLogOut user={user} setUser={setUser} />
        </nav>
    );
}