export default class NumberEntries {
  constructor(element) {
    this.element = element;
    this.items = new Set();
  }

  buildDOM() {
    this.element.innerHTML = `Количество человек: ${this.items.size} `;
  }

  add(name) {
    this.items.add(name);
    this.buildDOM();
  }

  remove(name) {
    this.items.delete(name);
    this.buildDOM();
  }
}
