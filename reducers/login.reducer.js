const initialState = {
  users: [],
  lastUser: "",
  online: false,
  language: "en",
  location: "/add-boards"
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        users: [
          ...state.users,
          {
            user: action.payload.user,
            password: action.payload.password
          }
        ]
      };
    case "SET_ONLINE":
      return {
        ...state,
        online: action.payload
      };
    case "SET_LAST_USER":
      return {
        ...state,
        lastUser: action.payload
      };
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.payload
      }
    case "SET_LOCATION":
      return {
        ...state,
        location: action.payload
      }
    default:
      return state;
  }
};
