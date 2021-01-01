import moment from "moment";
import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setTextFilter,
} from "../../actions/filters";

test("Should generate setstartdate action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("Should generate setenddate action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("Should generate sortByAmount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("Should generate sortByDate action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("Should generate setTextFilter action object for default", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT",
    text: "",
  });
});

test("Should generate setTextFilter action object for passed text", () => {
  const text = "Rent";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT",
    text,
  });
});
