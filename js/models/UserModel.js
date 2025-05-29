let users;

// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// ADICIONAR UTILIZADOR
export function add(username, password) {
  if (users.some((user) => user.username === username)) {
    throw Error(`User with username "${username}" already exists!`);
  } else {
    users.push(new User(username, password));
    localStorage.setItem("users", JSON.stringify(users));
  }
}

// LOGIN DO UTILIZADOR
export function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  } else {
    throw Error("Invalid login!");
  }
}

// LOGOUT DO UTILIZADOR
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// VERIFICA EXISTÊNCIA DE ALGUÉM AUTENTICADO
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// DEVOLVE UTILZIADOR AUTENTICADO
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}


/**
 * CLASSE QUE MODELO UM UTILIZADOR NA APLICAÇÃO
 */
class User {
  userId = "";
  username = "";
  password = "";
  email = "";
  coverPhoto = "";
  birthDate = "";
  phoneNumber = "";
  defaultPaymentMethod = "";
  gender = "";
  quizzes = [
    quiz = {
      idQuiz: "",
      correctAnswers: "",
      quizMiles: ""
    }
  ]


  constructor(userId, username, password, email, coverPhoto, birthDate, phoneNumber, defaultPaymentMethod, gender, quizzes) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.email = email;
    this.coverPhoto = coverPhoto;
    this.birthDate = birthDate;
    this.phoneNumber = phoneNumber;
    this.defaultPaymentMethod = defaultPaymentMethod;
    this.gender = gender;
    this.quizzes = quizzes;
  }
}



