import {
  GET_COUNTRIES,
  GET_BYNAME,
  POST_ACTIVITY,
  GET_BY_ID,
  ALPHABETICAL_ORDER,
  POPULATION_ORDER,
} from "./actions";

const initialState = {
  countries: [],
  countryDetail: {},
  post: [],
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_BYNAME:
      return {
        ...state,
        countries: [...action.payload],
      };

    case GET_BY_ID:
      return {
        ...state,
        countryDetail: action.payload,
      };

    case ALPHABETICAL_ORDER:
      const alphabeticalSort =
        action.payload === "A-Z"
          ? state.countries.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: alphabeticalSort,
      };

    case POPULATION_ORDER:
      const sortedCountries = [...state.countries];

      return {
        countries:
          action.payload === "ASC"
            ? sortedCountries.sort((a, b) => a.population - b.population)
            : sortedCountries.sort((a, b) => b.population - a.population),
      };

    case POST_ACTIVITY:
      return {
        ...state,
        post: [...state.post, action.payload],
      };

    default:
      return { ...state };
  }
};

export default reducer;
