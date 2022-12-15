import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar';

const Profile = () => {
    return (
        <section className='profile'>
            <div className="profile-header-container">
                <div className="profile-header">
                    {/* <div className="wallpaper">
                    <img src="" alt="" />
                </div> */}

                    <div className="profile-card">
                        <div className="user-image">
                            <Link to='/profile'>
                                <Avatar />
                            </Link>
                        </div>

                        <div className="profile-details">
                            <h1 className="user-name">
                                fay
                            </h1>

                            <ul className="profile-list">
                                <li className="category">
                                    <Link to='/'>
                                        Artist / illustrate
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;