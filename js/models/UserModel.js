let users = [];

// Inicializa a lista de usuários a partir da localStorage
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// Adiciona novo utilizador com todos os dados
export function addUser(userData) {
  if (users.some((user) => user.username === userData.username)) {
    throw Error(`User with username "${userData.username}" already exists!`);
  }

  const newUser = new User(
    userData.userId,
    userData.username,
    userData.password,
    userData.email,
    userData.coverPhoto,
    userData.birthDate,
    []
  );

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
}

// Autentica o utilizador
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

// Termina sessão
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// Verifica se alguém está autenticado
export function isLogged() {
  return !!sessionStorage.getItem("loggedUser");
}

// Retorna o utilizador autenticado
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}

// Classe User com estrutura completa
class User {
  constructor(userId, username, password, email, coverPhoto, birthDate, quizzes = []) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.email = email;
    this.coverPhoto = coverPhoto;
    this.birthDate = birthDate;
    this.quizzes = quizzes;
  }
}
