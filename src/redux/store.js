import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// it's will persist with local storage so when refresh the data won't disappeared
// persisted version of store
export const persistor = persistStore(store);

// export default { store, persistor };
