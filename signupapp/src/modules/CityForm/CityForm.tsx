import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../ui/atom/moleclues/InputField";
import { RootState } from "../../redux/store";
import { setCity } from "../../redux/SignupSlice";
import { Button } from "../../ui/atom/Button";
import { useNavigate } from "react-router-dom";

export const CityForm = ({}) => {
  const navigate = useNavigate();
  const city = useSelector((state: RootState) => state.signup.city);
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    dispatch(setCity(e.target.value));
  };
  const handleClick = () => {
    navigate("/country");
  };
  return (
    <div>
      <InputField
        onChange={handleChange}
        value={city}
        type="text"
        placeholder="Enter Your city"
      />
      <div>
        <Button onClick={handleClick} color="blue" label="submit" />
      </div>
    </div>
  );
};
