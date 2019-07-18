// Put the logic here
console.log('Loaded Search!');
import App from '../constants';
import Component from '../component';
import JobSummary from '../job-summary/job-summary';
import _ from 'lodash';

export class JobSearch extends Component {

  constructor() {
    super();

    this.render();
    this.addSelectors();
    this.addListeners();
  }

  render() {
    const selector = '.header'
    const template = `
    <img src="/assets/images/icons/icon-128x128.png"
      class="brand__logo"
      alt="Letxcode logo">
    <div class="brand">Let's Coding</div>
    <form class="search-bar" role="form">
      <label
        aria-labelledby="search"
        class="search-bar__label"
        for="search">Search your dreamed job ❤️</label>
      <input
        aria-required="true"
        class="search-bar__input"
        type="input"
        id="search"
        name="search"
        maxlength="15"
        autofocus
        placeholder="Front, JavaScript, DevOps...">
      <button
        class="search-bar__button"
        role="button"
        type="button"
        name="button" >
        <i class="material-icons">search</i>
      </button>
    </form>
    `;

    this.renderTemplate(selector, template);
  }

  addSelectors() {
    this.searchBarInput  = document.querySelector('.search-bar__input');
    this.searchBarButton = document.querySelector('.search-bar__button');
  }

  addListeners() {
    this.searchBarInput.addEventListener('input', _.debounce(this.onSearchKey.bind(this), 500));
    this.searchBarButton.addEventListener('click', this.onSearchKey.bind(this));
  }

  onSearchKey() {
    this.showDefault();

    if (this.searchBarInput.value &&
        this.searchBarInput.value.length >= App.api.MIN_CHARACTERS) {
      this.showLoader();
      const  key = this.searchBarInput.value;
      const url = `${App.api.URL}/${App.api.END_POINTS.POSITIONS}?`
      + `${App.api.PARAMETERS.DESCRIPTION}=${key}`;
      + `&${App.api.PARAMETERS.MARKDOWN}=false`;

      console.log(url);

      const options = {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }

      fetch(url, options)
      .then(response => response.json())
      .then(response => this.renderResults(response))
    }
  }

  renderResults(results) {
    if (results) {
      document.querySelector('.job-summary-container').innerHTML = '';

      results.forEach(result => {
        const cardSummary = new JobSummary(result);
        cardSummary.render();
      });
    }
  }

  showLoader() {
    const container = document.querySelector('.job-summary-container');

    container.innerHTML = `
      <div class="job-summary-loading">
        <i class="material-icons icon--loading">
        location_searching
        </i>
      </div>
    `;
  }

  showDefault() {
    const container = document.querySelector('.job-summary-container');

    container.innerHTML = `
      <div class="job-summary-loading">
        <img
          src="https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph-1/2048/5347_-_Github-64.png"
          srcset="https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph-1/2048/5347_-_Github-128.png 600w,
          https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph-1/2048/5347_-_Github-256.png 900w,
          https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph-1/2048/5347_-_Github-512.png 1000w"
          sizes="(min-width: 600px) 80vw,
          (min-width: 1000px) 60vw,
          80vw"
          alt="Search Image">
      </div>
    `;
  }
}
