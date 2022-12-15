import CreatorsArtists from "../components/Creators&Artists";
import AccountInfo from "../components/AccountInfo";
import Preferences from "../components/preferences";
import UpdatePassword from "../components/UpdatePassword";

const Account = () => {
    return (
        <>
            <AccountInfo />

            <CreatorsArtists />

            <Preferences />

            <UpdatePassword />
        </>
    );
}

export default Account;