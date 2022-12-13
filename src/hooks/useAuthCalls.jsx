import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../auth/firebase";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
} from "../features/authSlice";

const useAuthCalls = () => {
  const dispatch = useDispatch();

  const login = async (values) => {
    const { email, password } = values;
    dispatch(fetchStart());
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("giriş başarılı");
      dispatch(loginSuccess(values));
    } catch (error) {
      dispatch(fetchFail());
      console.log("hata oldu");
    }
  };

  const register = (values) => {
    dispatch(fetchStart());
    console.log(values);
    dispatch(registerSuccess(values));
  };

  return { login, register };
};

export default useAuthCalls;
