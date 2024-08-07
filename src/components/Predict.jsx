import React, { useState } from "react";
import axios from "axios";

const Predict = () => {
  const [formData, setFormData] = useState({
    BIKE_MODEL: "",
    PRIMARY_OFFENCE: "",
    BIKE_MAKE: "",
    LOCATION_TYPE: "",
    REPORT_DOY: "",
    OCC_DOY: "",
    PREMISES_TYPE: "",
    REPORT_HOUR: "",
    BIKE_SPEED: "",
    BIKE_COST: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePredict = async () => {
    // Convert formData.BIKE_COST to a number
    const requestData = {
      ...formData,
      BIKE_COST: Number(formData.BIKE_COST),
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:12345/predict",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const predictionResult = response.data.prediction;
      console.log(predictionResult);
      const finalPrediction =
        predictionResult === 0 ? "Stolen" : "Recovered";

      setPrediction(finalPrediction);
    } catch (error) {
      console.error("Error predicting:", error.message);
    }
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="BIKE_MODEL" className="form-label">
            Bike Model:
          </label>
          <input
            type="text"
            className="form-control"
            id="BIKE_MODEL"
            name="BIKE_MODEL"
            value={formData.BIKE_MODEL}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="PRIMARY_OFFENCE" className="form-label">
            Primary Offence:
          </label>
          <input
            type="text"
            className="form-control"
            id="PRIMARY_OFFENCE"
            name="PRIMARY_OFFENCE"
            value={formData.PRIMARY_OFFENCE}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="BIKE_MAKE" className="form-label">
            Bike Make:
          </label>
          <input
            type="text"
            className="form-control"
            id="BIKE_MAKE"
            name="BIKE_MAKE"
            value={formData.BIKE_MAKE}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="LOCATION_TYPE" className="form-label">
            Location Type:
          </label>
          <input
            type="text"
            className="form-control"
            id="LOCATION_TYPE"
            name="LOCATION_TYPE"
            value={formData.LOCATION_TYPE}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="REPORT_DOY" className="form-label">
            Report DOY:
          </label>
          <input
            type="text"
            className="form-control"
            id="REPORT_DOY"
            name="REPORT_DOY"
            value={formData.REPORT_DOY}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="OCC_DOY" className="form-label">
            Occ DOY:
          </label>
          <input
            type="text"
            className="form-control"
            id="OCC_DOY"
            name="OCC_DOY"
            value={formData.OCC_DOY}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="PREMISES_TYPE" className="form-label">
            Premises Type:
          </label>
          <input
            type="text"
            className="form-control"
            id="PREMISES_TYPE"
            name="PREMISES_TYPE"
            value={formData.PREMISES_TYPE}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="REPORT_HOUR" className="form-label">
            Report Hour:
          </label>
          <input
            type="text"
            className="form-control"
            id="REPORT_HOUR"
            name="REPORT_HOUR"
            value={formData.REPORT_HOUR}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="BIKE_SPEED" className="form-label">
            Bike Speed:
          </label>
          <input
            type="text"
            className="form-control"
            id="BIKE_SPEED"
            name="BIKE_SPEED"
            value={formData.BIKE_SPEED}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="BIKE_COST" className="form-label">
            Bike Cost:
          </label>
          <input
            type="text"
            className="form-control"
            id="BIKE_COST"
            name="BIKE_COST"
            value={formData.BIKE_COST}
            onChange={handleInputChange}
            required
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePredict}
        >
          Predict
        </button>
      </form>

      {prediction !== null && (
        <div className="form-group">
          <p>Prediction Result: {prediction}</p>
        </div>
      )}
    </div>
  );
};

export default Predict;
