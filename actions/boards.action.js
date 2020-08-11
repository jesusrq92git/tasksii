export const ItemsAction = (data, lastUser) => {
  return {
    type: "SET_ITEMS",
    payload: { ...data, lastUser }
  };
};

export const ItemsUpdateAction = data => {
  return {
    type: "UPDATE_ITEMS",
    payload: data
  };
};
