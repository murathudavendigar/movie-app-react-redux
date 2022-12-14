import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
  isActive,
} from "../features/authSlice";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarningNotify,
} from "../helpers/ToastNotify";

const useAuthCalls = () => {
  const dispatch = useDispatch();

  const login = async (values) => {
    const { email, password } = values;
    dispatch(fetchStart());
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginSuccess());
      toastSuccessNotify("Welcome !!");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Something went wrong !!");
    }
  };

  const register = async (values) => {
    const { email, password, name, surname } = values;
    const displayName = `${name} ${surname}`;
    dispatch(fetchStart());
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      dispatch(registerSuccess());
      toastSuccessNotify("Welcome !!");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Something went wrong !!");
    }
  };

  const logout = () => {
    signOut(auth);
    dispatch(logoutSuccess());
    toastWarningNotify("You are logged out !!!!");
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const activeUser = {
          email: user?.email,
          displayName: user?.displayName,
          photoURL: user?.photoURL,
        };
        dispatch(isActive(activeUser));
      } else {
        dispatch(logoutSuccess());
      }
    });
  };

  return { login, register, logout, userObserver };
};

export default useAuthCalls;
