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
            <p class="job-summary__job">
              <i class="material-icons">business</i>
              ${this.summary.type} / ${this.summary.company}
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
        </div>
        <div class="job-summary__description">
          ${this.truncateText(this.summary.description)}
        </div>
        <div class="job-summary__actions">
          <button class="button button--primary" type="button" name="button">Apply</button>
          <button class="button button--info" type="button" name="button">See More</button>
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
