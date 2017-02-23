import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const siteVersions = [];
let i = 1;

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  return i++;
};

class SiteVersionApi {
  static getAllSiteVersions() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], siteVersions));
      }, delay);
    });
  }

  static saveSiteVersion(siteVersion) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (siteVersion.id) {
          const existingSiteVersionIndex = siteVersions.findIndex(a => a.id == siteVersion.id);
          siteVersions.splice(existingSiteVersionIndex, 1, siteVersion);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new siteVersions in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          siteVersion.id = generateId(siteVersion);
          siteVersions.push(siteVersion);
        }
        resolve(Object.assign({}, siteVersion));
      }, delay);
    });
  }

  static deleteSiteVersion(siteVersionId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfSiteVersionToDelete = siteVersions.findIndex(siteVersion => {
          siteVersion.id == siteVersionId;
        });
        siteVersions.splice(indexOfSiteVersionToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default SiteVersionApi;