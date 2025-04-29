import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../../redux/SignupSlice";
import { Button } from "../../ui/atom/Button";
import { InputField } from "../../ui/atom/moleclues/InputField";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { allowedNodeEnvironmentFlags } from "process";

export const Password = ({}) => {
  const navigate = useNavigate();
  const password = useSelector((state: RootState) => state.signup.password);
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    dispatch(setPassword(e.target.value));
  };
  const isValidPassword =
    password.length >= 8 &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/.test(password);
  const handleClick = () => {
    if (isValidPassword) {
      navigate("/summary");
    } else {
      alert("Enter valid Password");
    }
  };
  return (
    <div>
      <div>
        <InputField
          type="password"
          onChange={handleChange}
          value={password}
          placeholder="Enter password"
        />
      </div>
      <div>
        <Button onClick={handleClick} color="green" label="submit" />
      </div>
    </div>
  );
};
