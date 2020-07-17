import React from "react";
import { connect } from "react-redux";

const CovidList = (props) => {
  console.log(props.countries);

  const handleGetCountry = (e) => {
    e.preventDefault();
    const show = document.querySelector(".toggleDisplay");
    if (show.style.display === "none") {
      show.style.display = "block";
    } else {
      show.style.display = "none";
    }
  };

  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.countries.map((country) => (
          <div>
            <h3 onClick={handleGetCountry}>Country: {country.Country}</h3>
            <div className="toggleDisplay">
              <p>New Confirmed Cases: {country.NewConfirmed}</p>
              <p>Total Confirmed Cases: {country.TotalConfirmed}</p>
              <p>New Deaths: {country.NewDeaths}</p>
              <p>Total Deaths: {country.TotalDeaths}</p>
              <p>New Recovered: {country.NewRecovered}</p>
              <p>Total Recovered: {country.TotalRecovered}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state.countries);
  return {
    countries: state.countries,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(CovidList);