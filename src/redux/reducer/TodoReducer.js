const initialState = {
  list: []
};

export const todoReducer = (state = initialState, action) => {
  console.log("Reducer action:", action);
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id,
            data,
          },
        ],
      };
    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id != action.id);
      console.log(newList);
      return {
        ...state,
        list: newList
      };
      case "REMOVE_ALL_TODO":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
