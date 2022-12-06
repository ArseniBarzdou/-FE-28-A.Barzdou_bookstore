import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducers/rootReducer";
import rootSaga from "./Sagas/rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({  
    reducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;