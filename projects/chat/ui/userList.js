export default class UserList {
  constructor(element) {
    this.element = element;
    this.items = new Set();
  }

  buildDOM() {
    const fragment = document.createDocumentFragment();

    this.element.innerHTML = '';

    for (const name of this.items) {
      const element = document.createElement('div');
      const photo = document.createElement('div');
      const userName = document.createElement('span');

      element.classList.add('user-list-item');
      photo.setAttribute('data-role', 'user-avatar');
      photo.setAttribute('data-user', name);
      photo.classList.add('user-photo');
      photo.style.backgroundImage = `url(/chat/photos/${name}.png?t=${Date.now()})`;
      photo.style.display = 'inline-block';
      userName.textContent = name;
      element.append(photo);
      element.append(userName);
      fragment.append(element);
    }

    this.element.append(fragment);
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
