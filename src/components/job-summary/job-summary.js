// Put the logic here
console.log('Loaded Summary!');
import App from '../constants';
import Component from '../component';

export default class JobSummary extends Component {

  constructor(summary) {
    super();
    this.summary = summary;
  }

  render() {
    const selector = '.job-summary-container'
    const template = `
        <div class="job-summary__header">
          <div class="job-summary__heading">
            <p class="job-summary__title">${this.summary.title}</p>
            <p class="job-summary__type">
              <i class="material-icons">watch_later</i>
              ${this.summary.type}
            </p>
            <p class="job-summary__job">
              <i class="material-icons">business</i>
              <a
                role="link"
                href="${this.summary.company_url}"
                target="_blank">${this.summary.company}</a>
            </p>
            <p class="job-summary__location">
              <i class="material-icons">location_on</i>
              ${this.summary.location}
            </p>
            <p class="job-summary__created">
              <i class="material-icons">date_range</i>
              ${this.summary.created_at}
            </p>
          </div>
          <div class="job-summary__logo">
            <img src="${this.summary.company_logo}" alt="company logo"/>
          </div>
        </div>
        <div class="job-summary__description">
          ${this.truncateText(this.summary.description)}
        </div>
        <div class="job-summary__actions">
          <a
            role="link"
            href="${this.summary.url}"
            target="_blank"
            class="button button--primary"
            name="button">Apply</a>
          <a
            role="link"
            href="${this.summary.url}"
            target="_blank"
            class="button button--info"
            name="button">See More</a>
        </div>
    `;
    const card = document.createElement('div');
    card.className = 'job-summary';
    card.innerHTML = template;

    document.querySelector(selector).appendChild(card);
  }

  truncateText(text, MAX_CHARACTERS = 140) {
    if (text) {
      return text.substr(0, MAX_CHARACTERS) + '...';
    }
  }

  getFormattedDate(createdAt) {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }
}
