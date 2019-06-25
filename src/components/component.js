export default class Component {
  renderTemplate(selector, template) {
    console.log(`rendering [${selector}]...`);
    document.querySelector(selector).innerHTML = template;
  }
}
