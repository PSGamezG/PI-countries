import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BYNAME = "GET_BYNAME";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_BY_ID = "GET_BY_ID";
export const ALPHABETICAL_ORDER = "ALPHABETICAL_ORDER";
export const POPULATION_ORDER = "POPULATION_ORDER";
export const CONTINENT_FILTER = "CONTINENT_FILTER";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const ACTIVITY_FILTER = "ACTIVITY_FILTER";

export function getCountries() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/countries");

      dispatch({
        type: GET_COUNTRIES,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function getByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/countries/name?name=${name}`
      );

      dispatch({
        type: GET_BYNAME,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function getById(ID) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/countries/${ID}`);
      console.log(response.data);

      dispatch({
        type: GET_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/activities");

      dispatch({
        type: GET_ACTIVITIES,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function alphabeticalOrder(name) {
  return { type: ALPHABETICAL_ORDER, payload: name };
}

export function populationOrder(order) {
  return { type: POPULATION_ORDER, payload: order };
}

export function continentFilter(continent) {
  return { type: CONTINENT_FILTER, payload: continent };
}

export function activityFilter(activity) {
  return { type: ACTIVITY_FILTER, payload: activity };
}

export function postActivity(formData) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/activities",
        formData
      );
      dispatch({
        type: POST_ACTIVITY,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}
