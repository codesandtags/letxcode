import './styles.scss';

import * as header from './components/header';
import * as dashboard from './components/dashboard';
import * as jobDetails from './components/job-details';
import * as jobResults from './components/job-results';
import * as jobSearch from './components/job-search';
import * as jobSummary from './components/job-summary';

const search = new jobSearch.JobSearch();

/**
 * @todo Add Service Worker
 * @body It's necessary to add a Service Worker to enable the power of the
 * Progressive Web Applications
 **/
function addServiceWorker() {
  // TODO: Add service worker logic here.
}
