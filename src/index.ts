import { User } from "./classes/user";
import { Notificacion } from "./classes/notification";

const jose = new User(1, "jose");
const juan = new User(2, "juan");
const notiJose = new Notificacion(
  1,
  "te etiqueto en una historia",
  jose.id,
  juan.id
);

jose.addNotificacion(notiJose);
console.log(jose.casilla);
