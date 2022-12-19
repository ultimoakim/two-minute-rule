import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import UserLogOut from '../UserLogOut/UserLogOut';

export default function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <Link to="/reports">Report History</Link>
            &nbsp; | &nbsp;
            <Link to="/reports/new">New Report</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
            &nbsp; | &nbsp;<UserLogOut user={user} setUser={setUser} />
        </nav>
    );
}