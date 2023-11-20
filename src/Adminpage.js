import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { setData } from "./Redux/dataslice";
import Input from "./Input";
import { Button } from "@mui/material";
import Map from "./Map";

const Adminpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const adminid = useSelector((state) => state.User.user.id);
  const data = useSelector((state) => state.User.data);
  const [chargeCustomers, setChargeCustomers] = useState(data.charge_customers);

  const [formData, setFormData] = useState(data.amount);
  const [isError, setIsError] = useState(false);

  const getAdminData = () => {
    axios
      .get(`https://stg.dhunjam.in/account/admin/${id ?? adminid}`)
      .then((response) => {
        console.log(response.data, "admindetails");
        dispatch(setData(response.data.data));
        setChargeCustomers(response.data.data.charge_customers);
        setFormData(response.data.data.amount);
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
      });
  };

  useEffect(() => {
    getAdminData();
  }, []);
  console.log(data, "reduxdata");
  if (!id && !adminid) {
    navigate("/");
  }

  const handleFormChange = (value, name) => {
    if (name == "error") {
      setIsError(true);
    } else {
      setFormData({ ...formData, [name]: value });
      checkDisabled();
    }
  };

  const checkDisabled = () => {
    if (
      formData.category_6 > 99 &&
      formData.category_7 > 79 &&
      formData.category_8 > 59 &&
      formData.category_9 > 39 &&
      formData.category_10 > 19 &&
      chargeCustomers
    ) {
      return false;
    }
    return true;
  };

  if (!data.id) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }

  const handleRadio = () => {
    setChargeCustomers(!chargeCustomers);
  };

  const postdata = () => {
    if (id || adminid) {
      axios
        .put(`https://stg.dhunjam.in/account/admin/${id ?? adminid}`, {
          amount: formData,
          charge_customers: chargeCustomers,
        })
        .then((res) => {
          console.log("updated successfully", res);
          alert("succefully changed ");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("failed to update");
    }
  };

  return (
    <>
      <div className="container">
        <h1>
          {data.name}, {data.location} on Dhun Jam
        </h1>
        <div>
          <div className="radiodiv">
            <label>
              Do you want to charge your customers for requesting songs?
            </label>

            <div className="radioButtons">
              <input
                type="radio"
                name="charge"
                value="Yes"
                checked={chargeCustomers}
                onChange={() => handleRadio()}
              />
              <label htmlFor="Yes">Yes</label>
              <input
                type="radio"
                name="charge"
                value="No"
                checked={!chargeCustomers}
                onChange={() => handleRadio()}
              />
              <label htmlFor="No">No</label>
            </div>
          </div>
          <div className="customamountdiv">
            <label>Custom song request amount -</label>

            <div className="customAmountDivInput">
              <Input
                disabled={!chargeCustomers}
                value={data.amount.category_6}
                minvalue={99}
                name="category_6"
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div className="regularsongamountdiv">
            <div>
              <label>
                Regular song request amounts <br />
                from high to low -
              </label>
            </div>
            <div className="regularCategories">
              <Input
                disabled={!chargeCustomers}
                value={data.amount.category_7}
                minvalue={79}
                name="category_7"
                onChange={handleFormChange}
              />

              <Input
                disabled={!chargeCustomers}
                value={data.amount.category_8}
                minvalue={59}
                name="category_8"
                onChange={handleFormChange}
              />

              <Input
                disabled={!chargeCustomers}
                value={data.amount.category_9}
                minvalue={39}
                name="category_9"
                onChange={handleFormChange}
              />

              <Input
                disabled={!chargeCustomers}
                value={data.amount.category_10}
                minvalue={19}
                name="category_10"
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div className="graphDiv">
            <Map className="graph" formData={formData} />
          </div>

          <Button
            className="saveButton"
            variant="contained"
            onClick={() => postdata()}
            disabled={checkDisabled()}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default Adminpage;
