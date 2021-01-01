import { createStore } from "redux";

// action generators
const incrementCount = (payload = {}) => {
  return {
    type: "INCREMENT",
    incrementBy:
      typeof payload.incrementBy === "number" ? payload.incrementBy : 1,
  };
};

const decrementCount = (payload = {}) => {
  return {
    type: "DECREMENT",
    decrementBy:
      typeof payload.decrementBy === "number" ? payload.decrementBy : 1,
  };
};

const setCount = (payload) => {
  return {
    type: "SET",
    count: payload.count,
  };
};

const resetCount = () => {
  return {
    type: "RESET",
  };
};

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));
