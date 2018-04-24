function moveZeros(tab = []) {
  //const filtre = tab.filter(elt => elt !== false && elt !== true);
  const filtre = tab.filter(elt => typeof elt !== "boolean");
  const filtreZero = filtre.filter(elt => elt === 0);
  const diffTabs = filtre.filter(x => !filtreZero.includes(x));
  //console.log(diffTabs);

  const mergeTableau = [...diffTabs, ...filtreZero];
  // console.log(mergeTableau);
  return mergeTableau;
}

const resultat = moveZeros([false, 1, 0, 1, 2, 0, 1, true, 0, 3, "a"]);
console.log(resultat);
