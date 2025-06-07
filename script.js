function login() {
  const username = prompt('შეიყვანეთ სახელი:');
  const password = prompt('შეიყვანეთ პაროლი:');

  if (username === 'admin' && password === '1234') {
    return 'Hello Admin';
  } else {
    return 'Hello guest';
  }
}
// ფუნქციით დაბრუნებული ტექსტი გამომაქვს კონსოლში
const message = login();
console.log(message);  