// your functions

/*let nombre1 = 7;
let seven = function(operateur) {
  console.log(operateur);

  //   if (operateur === undefined) {
  //     return operateur;
  //   }
  return nombre1;
};

let minus = function(nombre2) {
  if (operateur === undefined) {
    return operateur;
  }

  return nombre1 - nombre2;
};*/
let temp;
const plus = x => {
  console.log("coucou");
  console.log("temp : " + temp);
  // console.log("x : " + x);
  return x + temp;
};
const one = a => {
  if (a) {
    // console.log("a: " + a);
    temp = 1;
    return temp;
  } else {
    return 1;
  }
};

// let test = one(plus(1));
const test = one(plus(one));

console.log("résultat : " + test);
