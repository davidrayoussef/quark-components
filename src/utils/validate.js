export function validateUsername(str) {
  return /^[a-z0-9]{3,30}$/i.test(str);
}

export function validatePassword(str) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(str);
}

export function validateEmail(str) {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,24})+$/.test(str);
}