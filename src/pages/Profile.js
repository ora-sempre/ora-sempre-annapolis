import './Profile.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import { db } from '../Firebase.config';
import { updateDoc, doc, getDoc } from '@firebase/firestore';
import { toast } from 'react-toastify';

const Profile = () => {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    number: '',
  });

  const { name, email, number } = formData;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userRef = doc(db, 'users', auth.currentUser.uid);
      try {
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setFormData((prevState) => ({
            ...prevState,
            number: userSnap.data().number,
          }));
        }
      } catch (error) {
        toast.error("Could not get user's number");
      }
    };

    fetchUserDetails();
  }, [auth.currentUser]);

  const onLogOut = () => {
    auth.signOut();
    navigate('/');
    toast.success('You have been logged out');
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }

      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, {
        name: name,
        number: number,
      });

      toast.success('Profile updated');
    } catch (error) {
      toast.error('Error updating profile');
      console.log(error);
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <>
      <div className="profile">
        <header className="profileHeader">
          <p className="pageHeader">My Profile</p>
          <button className="logOut" type="button" onClick={onLogOut}>
            Log Out
          </button>
        </header>

        <main>
          <div className="profileDetailsHeader">
            <p className="profileDetailsText">Personal Details</p>
            <p
              className="changePersonalDetails"
              onClick={() => {
                changeDetails && onSubmit();
                setChangeDetails((prevState) => !prevState);
              }}
            >
              {changeDetails ? 'Done' : 'Edit'}
            </p>
          </div>

          <div className="profileCard">
            <form>
              <label>Full Name:</label>
              <input
                type="text"
                id="name"
                className={!changeDetails ? 'profileName' : 'profileNameActive'}
                disabled={!changeDetails}
                value={name}
                onChange={onChange}
              />

              <label>Email:</label>
              <input
                type="text"
                id="email"
                className=""
                disabled={true}
                value={email}
                onChange={onChange}
              />

              <label>Phone Number:</label>
              <input
                type="text"
                id="number"
                className=""
                disabled={!changeDetails}
                value={number}
                onChange={onChange}
              />
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;
