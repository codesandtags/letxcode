import _ from 'lodash';
import './styles.scss';
import Icon from './assets/images/github-logo.png';

import * as header from './components/header';
import * as dashboard from './components/dashboard';
import * as jobDetails from './components/job-details';
import * as jobResults from './components/job-results';
import * as jobSearch from './components/job-search';
import * as jobSummary from './components/job-summary';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
