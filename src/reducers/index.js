import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import { modes } from './modeReducer';
import { versions } from './versionReducer';
import siteVersion from './siteVersionReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  modes,
  versions,
  siteVersion,
  routing: routerReducer
});

export default rootReducer;
