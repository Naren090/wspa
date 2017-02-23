import * as types from '../constants/actionTypes';
// import initialState from './initialState';

const siteVersions = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_SITEVERSIONS: {
      return action.siteVersions;
    }
    case types.CREATE_SITEVERSIONS: {
      return [
        ...state,
        Object.assign({}, action.siteVersions),
      ];
    }
    case types.DELETE_SITEVERSIONS: {
      const newState = Object.assign([], state);
      const indexOfSiteVersionToDelete = state.findIndex(siteVersion => {
        return siteVersion.id == action.id;
      });
      newState.splice(indexOfSiteVersionToDelete, 1);
      return newState;
    }
    default:
      return state;
  }
};

export default siteVersions;
