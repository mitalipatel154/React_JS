import { createSlice } from "@reduxjs/toolkit";


const initialState = [{ count: 0, count2: 0 }]; 

const getCount = (state) => {
  if (typeof state[0] === "number") return state[0];
  return state[0]?.count ?? 0;
};

const getCount2 = (state) => {
  if (state[1]?.count2 !== undefined) return state[1].count2;
  return state[0]?.count2 ?? 0;
};

const buildState = (state, count, count2) => {

  if (typeof state[0] === "number") return [count];

  if (state.length === 1 && state[0].count !== undefined && state[0].count2 === undefined) {
    return [{ count }];
  }

  if (state.length === 2 && state[1]?.count2 !== undefined) {
    return [{ count }, { count2 }];
  }

  return [{ count, count2 }];
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state) => {
      return buildState(state, getCount(state) + 1, getCount2(state));
    },
    decrementCount: (state) => {
      return buildState(state, getCount(state) - 1, getCount2(state));
    },
    incrementCount2: (state) => {
      return buildState(state, getCount(state), getCount2(state) + 1);
    },
    decrementCount2: (state) => {
      return buildState(state, getCount(state), getCount2(state) - 1);
    },
    reset: () => buildState(initialState, 0, 0),
  },
});

export const { incrementCount, decrementCount, incrementCount2, decrementCount2, reset } = counterSlice.actions;
export default counterSlice.reducer;
    