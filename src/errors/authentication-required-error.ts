export class AuthenticationRequiredError extends Error {
  constructor() {
    super(`Authentication required`);
  }
}
