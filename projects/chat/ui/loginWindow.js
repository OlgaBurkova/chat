export default class LoginWindow {
  constructor(element, onLogin) {
    this.element = element;
    this.onLogin = onLogin;

    const loginNameInput = element.querySelector('[data-role=login-name-input]');
    const submitButton = element.querySelector('[data-role=login-submit]');

    submitButton.addEventListener('click', () => {
      const name = loginNameInput.value.trim();

      if (name) {
        this.onLogin(name);
      }
    });
  }

  show() {
    this.element.classList.remove('hidden');
  }

  hide() {
    this.element.classList.add('hidden');
  }
}
