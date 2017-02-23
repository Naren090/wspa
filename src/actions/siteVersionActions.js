import * as types from '../constants/actionTypes';
import MockModeApi from './../api/mockModeApi';
import MockVersionApi from './../api/mockVersionApi';
import MockSiteVersionApi from './../api/mockSiteVersionApi';

export function loadModesSuccess(modes) {
  return { type: types.LOAD_MODES, modes };
}

export function loadVersionsSuccess(versions) {
  return { type: types.LOAD_VERSIONS, versions };
}

export function loadSiteVersionsSuccess(siteVersions) {
  return { type: types.LOAD_SITEVERSIONS, siteVersions };
}

export function addSiteVersionSuccess(siteVersions) {
  return { type: types.CREATE_SITEVERSIONS, siteVersions };
}

export function deleteSiteVersionSuccess(id) {
  return { type: types.DELETE_SITEVERSIONS, id };
}

export function loadModes() {
  return (dispatch) => {
    return MockModeApi.getAllModes().then(modes => {
      dispatch(loadModesSuccess(modes));
    }).catch(error => {
      throw (error);
    });
  };
}

export function loadVersions() {
  return (dispatch) => {
    return MockVersionApi.getAllVersions().then(versions => {
      dispatch(loadVersionsSuccess(versions));
    }).catch(error => {
      throw (error);
    });
  };
}

export function loadSiteVersions() {
  return (dispatch) => {
    return MockSiteVersionApi.getAllSiteVersions().then(siteVersions => {
      dispatch(loadSiteVersionsSuccess(siteVersions));
    }).catch(error => {
      throw (error);
    });
  };
}


export function addSiteVersion(siteVersion) {
  return (dispatch) => {
    return MockSiteVersionApi.saveSiteVersion(siteVersion).then(siteVersions => {

      dispatch(addSiteVersionSuccess(siteVersions));
    }).catch(error => {
      throw (error);
    });
  };
}

export function deleteSiteVersion(id) {
  return (dispatch) => {
    return MockSiteVersionApi.deleteSiteVersion(id).then(() => {
      dispatch(deleteSiteVersionSuccess(id));
    }).catch(error => {
      throw (error);
    });
  };
}



