import { useState } from "react";

function LocationForm() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  function handleCountryChange(e) {
    setCountry(e.target.value);

    // Reset dependent selections
    setState("");
    setCity("");
  }

  function handleStateChange(e) {
    setState(e.target.value);

    // Reset the selected city
    setCity("");
  }

  return (
    <div>
      <select value={country} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>

      <select
        value={state}
        onChange={handleStateChange}
        disabled={!country}
      >
        <option value="">Select State</option>
        {country === "India" && (
          <>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
          </>
        )}
        {country === "USA" && (
          <>
            <option value="California">California</option>
            <option value="Texas">Texas</option>
          </>
        )}
      </select>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={!state}
      >
        <option value="">Select City</option>
        {state === "Tamil Nadu" && (
          <>
            <option value="Chennai">Chennai</option>
            <option value="Madurai">Madurai</option>
          </>
        )}
        {state === "Kerala" && (
          <>
            <option value="Kochi">Kochi</option>
          </>
        )}
        {state === "California" && (
          <>
            <option value="Los Angeles">Los Angeles</option>
          </>
        )}
        {state === "Texas" && (
          <>
            <option value="Austin">Austin</option>
          </>
        )}
      </select>
    </div>
  );
}

export default LocationForm;