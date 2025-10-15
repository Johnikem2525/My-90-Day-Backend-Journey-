function chicken() {
return egg();
}
function egg() {
return chicken();
}
console.log(chicken() + " came first.");
/* The program has infinite function call. It is like a ball that iz trapped within a building. control keeps going back and forth between chicken() and egg() Therefore thd program will crash because the stack will be exceeded */