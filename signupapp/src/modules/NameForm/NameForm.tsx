import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../ui/atom/moleclues/InputField";
import { RootState } from "../../redux/store";
import { setFirstName, setLastName } from "../../redux/SignupSlice";
import { Button } from "../../ui/atom/Button";
import { useNavigate } from "react-router-dom";

export const NameForm = ({}) => {
  const navigate = useNavigate();
  const firstName = useSelector((state: RootState) => state.signup.firstName);
  const lastName = useSelector((state: RootState) => state.signup.lastName);
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    dispatch(setFirstName(e.target.value));
  };
  const handleSubmit = (e: any) => {
    dispatch(setLastName(e.target.value));
  };
  const handleClick = () => {
    navigate("/city");
  };
  return (
    <div>
      <h2>hello {firstName}</h2>
      <div>
        <InputField
          type="text"
          onChange={handleChange}
          value={firstName}
          placeholder="Enter your First name"
        />
      </div>
      <div>
        <InputField
          type="text"
          onChange={handleSubmit}
          value={lastName}
          placeholder="Enter your Last  name"
        />
      </div>

      <div>
        <Button onClick={handleClick} color="blue" label="submit" />
      </div>
    </div>
  );
};
