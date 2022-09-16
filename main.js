
// ejemplo del uso de bloques DOWHILE y SWITCH CASE
let a = 0;
do {
  console.log("el valor de a es: ",a);
  a++;
} while (a < 5);
console.log("termina la condicion porque el valor de a es: ", a);

for (let i = 0; i < 5; i++) {
  let caso =+i;
  switch(caso) {
    case 0:
      console.log("primer caso cuando toma valor 0: ", caso);
      break;
    case 1:
      console.log("segundo caso cuando toma valor 1: ", caso);
      break;
    case 2:
      console.log("tercer caso cuando toma valor 2: ", caso);
        break;
    default:
      console.log("ultimo caso cuando toma cualquier otro valor", caso);
  }
}

