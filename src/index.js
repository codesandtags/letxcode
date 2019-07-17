import './styles.scss';

import * as header from './components/header';
import * as dashboard from './components/dashboard';
import * as jobDetails from './components/job-details';
import * as jobResults from './components/job-results';
import * as jobSearch from './components/job-search';
import * as jobSummary from './components/job-summary';

const search = new jobSearch.JobSearch();
addServiceWorker();

/**
 * Progressive Web Applications.
 * 1. Register of service worker.
 **/
function addServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js')
        .then(reg => {
          console.log('Service worker registered! 😎', reg);
        })
        .catch(err => {
          console.log('😥 Service worker registration failed: ', err);
        });
    });
  }
}
