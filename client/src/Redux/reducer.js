import {
  GET_COUNTRIES,
  GET_BYNAME,
  POST_ACTIVITY,
  GET_BY_ID,
  ALPHABETICAL_ORDER,
  POPULATION_ORDER,
  CONTINENT_FILTER,
  GET_ACTIVITIES,
  ACTIVITY_FILTER,
} from "./actions";

const initialState = {
  countries: [],
  countryDetail: {},
  filterContinent: [],
  allActivities: [],
  activities: [],
  post: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filterContinent: [],
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

    case GET_ACTIVITIES:
      return {
        ...state,
        allActivities: action.payload,
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

    case CONTINENT_FILTER:
      const countriesFiltered = state.countries.filter((country) =>
        country.continents.includes(action.payload)
      );
      return {
        ...state,
        filterContinent: countriesFiltered,
      };

    case ACTIVITY_FILTER:
      const allCountries2 = state.countries;

      const solo = allCountries2.filter((pais) => {
        return pais.Activities.length > 0;
      });

      let array = [];

      for (let i = 0; i < solo.length; i++) {
        for (let j = 0; j < solo[i].Activities.length; j++) {
          if (solo[i].Activities[j].name === action.payload) {
            array.push(solo[i]);
          }
        }
      }

      const filtro = action.payload === "Todos" ? allCountries2 : array;

      return {
        ...state,
        countries: filtro,
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
