import { useQuery } from "@tanstack/react-query";
import { InputField } from "../../ui/atom/moleclues/InputField";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCountry } from "../../redux/SignupSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/atom/Button";

const fetchCountryList = async () => {
  const countryNames = await fetch("https://restcountries.com/v3.1/all");
  return countryNames.json();
};
export const CountryList = ({}) => {
  const navigate = useNavigate();
  const country = useSelector((state: RootState) => state.signup.country);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    dispatch(setCountry(e.target.value));
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountryList,
  });
  if (isPending) return <h1>loading....</h1>;
  if (error) return <h1>something went wrong</h1>;

  const names = data
    .map((countries: any) => countries.name?.common)
    .filter(Boolean)
    .sort();

  const handleClick = () => {
    navigate("/password");
  };

  return (
    <div>
      <h3>Select Your Country</h3>
      <select value={country} onChange={handleChange}>
        {names.map((name: string) => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>

      <Button onClick={handleClick} color="blue" label="submit" />
    </div>
  );
};
