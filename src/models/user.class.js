import { ROLES } from "./roles.enu";

export class User {
  username = "";
  email = "";
  password = "";
  role = ROLES.USER;

  constructor(username, email, password, role) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
