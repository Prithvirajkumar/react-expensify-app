export const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT",
    text,
  };
};

export const sortByDate = () => {
  return {
    type: "SORT_BY_DATE",
  };
};

export const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT",
  };
};

export const setStartDate = (startDate = undefined) => {
  return {
    type: "SET_START_DATE",
    startDate,
  };
};

export const setEndDate = (endDate = undefined) => {
  return {
    type: "SET_END_DATE",
    endDate,
  };
};
