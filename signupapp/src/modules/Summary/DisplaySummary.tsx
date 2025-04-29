import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const DisplaySummary = ({}) => {
  const summary = useSelector((state: RootState) => state.signup);
  return (
    <div style={{textAlign:'center'}}>
        <div>
      <h5> Email        : {summary.email}</h5>
      <h5> First Name   : {summary.firstName}</h5>
      <h5> Last Name    : {summary.lastName}</h5>
      <h5> City         : {summary.city}</h5>
      <h5> Country      : {summary.country}</h5>
      <h5> password     : {summary.password}</h5>
        </div>
      
    </div>
  );
};
