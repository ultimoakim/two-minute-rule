import {logOut} from '../../utilities/users-service';
import './UserLogOut.css';

export default function UserLogOut({user, setUser}) {

    function handleLogOut() {
        logOut();
        setUser(null);
    }

    return(
        <main>
            <button className='logOutBtn' onClick={handleLogOut}>Log Out!</button>
        </main>
    );
}