import { useDispatch } from "react-redux";
import { fetchStart, loginSuccess } from "../features/authSlice";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const login = (values) => {
    dispatch(fetchStart());
    console.log("email : " + values.email);
    console.log("password : " + values.password);
    dispatch(loginSuccess(values));
  };

  return { login };
};

export default useAuthCalls;
