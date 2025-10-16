const greeting = (name, greeting = "Hello") => `${name} ${greeting}`;
console.log (greeting("John", "Welcome Home"))
console.log (greeting("John"))