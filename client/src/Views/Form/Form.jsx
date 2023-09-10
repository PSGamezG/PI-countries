import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Validation from "../Validation";
import { getCountries, postActivity } from "../../Redux/actions";
import axios from "axios";

const Form = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);

  if (!countries) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [errors, setErros] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const changeForm = (event) => {
    setErros(Validation({ ...form, [event.target.name]: event.target.value }));
    // setForm({ ...form, [event.target.name]: event.target.value });

    const { name, value, options } = event.target;

    if (name === "countries") {
      const selectedCountries = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          const [ID] = options[i].value.split("-");
          selectedCountries.push(ID);
        }
      }
      setForm({ ...form, countries: selectedCountries });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/activities", form).then((res) => {
      if (res.status === 200) {
        setSuccessMessage("Activity created successfully!");
        setForm({
          name: "",
          difficulty: "",
          duration: "",
          season: "",
          countries: [],
        });
      } else {
        setSuccessMessage("");
      }
    });
  };

  return (
    <div>
      <h2>Create your Activity!</h2>
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={submitHandler}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={form.name}
            onChange={changeForm}
            name="name"
          />
          {errors.e1 ? <p>{errors.e1}</p> : console.log("all good")}
        </div>

        <div>
          <label>Difficulty: </label>
          <input
            type="text"
            value={form.difficulty}
            onChange={changeForm}
            name="difficulty"
          />
          {errors.e2 ? <p>{errors.e2}</p> : console.log("all good")}
        </div>

        <div>
          <label>Duration(in hours): </label>
          <input
            type="text"
            value={form.duration}
            onChange={changeForm}
            name="duration"
          />
          {errors.e3 ? <p>{errors.e3}</p> : console.log("all good")}
        </div>

        <div>
          <label>Season: </label>
          <select
            type="text"
            value={form.season}
            onChange={changeForm}
            name="season"
          >
            <option value="Winter">Winter</option>
            <option value="Autumn">Autumn</option>
            <option value="Fall">Fall</option>
            <option value="Summer">Summer</option>
          </select>
        </div>

        <div>
          <label>Countries: </label>
          <select
            name="countries"
            onChange={changeForm}
            multiple={true}
            size={countries.length}
          >
            {countries.map((country) => (
              <option key={country.ID} value={`${country.ID}-${country.name}`}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;

//Tipeo, se dispara en changeForm, pide el cambio de estado, validacion y estado cambia
