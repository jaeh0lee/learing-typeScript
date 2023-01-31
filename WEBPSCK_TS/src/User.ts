export default class User {
  constructor(public username: string, public email: string) {}
  jaeho() {
    console.log(`${this.username} + hello`);
  }
}
