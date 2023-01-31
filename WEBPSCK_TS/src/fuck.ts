import User from "./User";

export default class Fuck extends User {
  constructor(public name: string, breed: string) {
    super(name, breed);
  }
  hoho() {
    console.log(`${this.name}` + "hi");
  }
}
