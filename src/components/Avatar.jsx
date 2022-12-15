import profile from '../assets/avatar.jpg'

const Avatar = () => {
    return (
    <>
        {/* <label htmlFor="userImage"> <img id='preview' src={ userImg } alt="" className="profile" /></label> */ }
        < img src={ profile } alt="" className="profile" />
    </>
    );
}

export default Avatar;