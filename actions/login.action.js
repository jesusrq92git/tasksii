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
