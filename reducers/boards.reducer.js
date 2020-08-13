const initialState = {
  items: []
};

export const BoardsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        items: [
          ...state.items,
          {
            title: action.payload.title,
            description: action.payload.description,
            priority: action.payload.priority,
            category: action.payload.category,
            user: action.payload.lastUser,
            id: action.payload.id
          }
        ]
      };
    case "UPDATE_ITEMS":
      return {
        items: [...action.payload]
      };
    default:
      return state;
  }
};
