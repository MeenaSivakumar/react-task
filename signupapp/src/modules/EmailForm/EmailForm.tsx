import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../ui/atom/moleclues/InputField";
import { RootState } from "../../redux/store";
import { setEmail } from "../../redux/SignupSlice";
import { Button } from "../../ui/atom/Button";
import { useNavigate } from "react-router-dom";

export const EmailForm = ({}) => {
  const navigate = useNavigate();
  const email = useSelector((state: RootState) => state.signup.email);
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    dispatch(setEmail(e.target.value));
  };
  const isValidEmail =
    email !== "" &&
    /^[a-zA-Z0-9_.+-]+@[a-zA_Z0-9]+\.[a-zA-Z0-9-.]+$/.test(email);
  const handleClick = () => {
    if (isValidEmail) {
      navigate("/nameForm");
    } else {
      alert("Enter valid email");
    }
  };
  return (
    <div>
      <div>
        <InputField
          type="text"
          placeholder="Enter email id"
          onChange={handleChange}
          value={email}
        />
      </div>
      <div>
        <Button onClick={handleClick} color="blue" label="submit" />
      </div>
    </div>
  );
};
