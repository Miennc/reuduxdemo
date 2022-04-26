import { combineReducers } from "@reduxjs/toolkit";

import productReducer from "./productReducer";
import tableReducer from "./tableReducer";

const rootReducer = combineReducers({
  product: productReducer,
  table: tableReducer,
});

export default rootReducer;