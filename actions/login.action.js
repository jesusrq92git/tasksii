export const LoginAction = data => {
  return {
    type: "SET_LOGIN",
    payload: { ...data }
  };
};

export const isOnlineAction = value => {
  return {
    type: "SET_ONLINE",
    payload: value
  };
};

export const lastUserAction = user => {
  return {
    type: "SET_LAST_USER",
    payload: user
  };
};

export const languageAction = lang => {
  return {
    type: "SET_LANGUAGE",
    payload: lang
  }
}

export const locationRoute = route => {
  return {
    type: "SET_LOCATION",
    payload: route
  }
} 
