import { GET_REQUIEST, GET_SUCCESS, GET_ERROR } from "./action";

const initState = {
  isError: false,
  isLoading: false,
  products: [],
  filterData: [],
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_REQUIEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        products: [],
        filterData: [],
      };

    case GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: [...action.payload],
        filterData: [],
      };

    case GET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: [],
        filterData: [],
      };
    default:
      return state;
  }
};
