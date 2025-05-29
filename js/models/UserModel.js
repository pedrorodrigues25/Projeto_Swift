let users;

// Inicializar utilizadores da LocalStorage
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// Adicionar novo utilizador
export function add(userId, username, password, email, coverPhoto = '', birthDate = '', phoneNumber = '', defaultPaymentMethod = '', gender = '', quizzes = []) {
  if (users.some((user) => user.username === username)) {
    throw Error(`User with username "${username}" already exists!`);
  }

  users.push(new User(userId, username, password, email, coverPhoto, birthDate, phoneNumber, defaultPaymentMethod, gender, quizzes));
  localStorage.setItem("users", JSON.stringify(users));
}

// Login do utilizador
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

// Logout
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// Verifica se alguém está autenticado
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// Devolve o utilizador autenticado
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