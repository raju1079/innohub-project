// reducers/index.js
import { combineReducers } from 'redux';
import citiesReducer from '../redux/reducers/citiesReducer';
import statesReducer from '../redux/reducers/statesReducer';
import higherEducationReducer from '../redux/reducers/higherEducationReducer';
import formReducer from './reducers/formReducer';
import loginReducer from './reducers/adminReducer';
import adminReducer from './reducers/adminReducer';

const rootReducer = combineReducers({
 
  states: statesReducer,
  cities: citiesReducer,
  higherEducation: higherEducationReducer,
  form: formReducer,
  admin: adminReducer
  
});

export default rootReducer;
