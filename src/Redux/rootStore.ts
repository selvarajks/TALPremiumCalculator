import {
  AnyAction,
  applyMiddleware,
  compose,
  createStore,
  Dispatch,
  Middleware,
} from "redux";
import thunk from "redux-thunk";
import { reducers } from "./rootReducer";
const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const simplifyObjectMiddleware = () => (next: Dispatch<AnyAction>) => (
  action: AnyAction
) => {
  next({ ...action });
};

const middleware: Middleware[] = [thunk, simplifyObjectMiddleware];

const composedEhancers = compose(applyMiddleware(...middleware));

export default createStore(reducers, composedEhancers);
