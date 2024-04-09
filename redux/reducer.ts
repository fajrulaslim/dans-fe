import { combineReducers } from "redux";
import globalSlice from "./global/globalSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import tableSlice from "./table/tableSlice";
import dashboardSlice from "./pages/dashboard/dashboardSlice";

const persistGlobalConfig = {
  key: "global",
  storage,
};

const persistGlobalReducer = persistReducer(persistGlobalConfig, globalSlice);

const reducer = combineReducers({
  global: persistGlobalReducer,
  table: tableSlice,
  dashboard: dashboardSlice,
});

export default reducer;
