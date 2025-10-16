const wrapValue = n => {return () => n}
let wrap1 = wrapValue(60);
let wrap2 = wrapValue(44);
console.log(wrap1());
console.log(wrap2());
