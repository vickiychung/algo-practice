function stringRotation(s1, s2) {
  // if (!isSubstring(s1, s2)) return false;

  let subIdx = s1.indexOf(s2);
  let left = s1.slice(0, subIdx);
  let right = s1.slice(subIdx + s2.length + 1);

  s1 = s1.split('');
  s1.splice(subIdx, s2.length);
  s1 = s1.join('');

  console.log(right);
  return left;
}

function isSubstring(str, substr) {
  return str.includes(substr);
}

// console.log(isSubstring("waterbottle", "water")); //true
// console.log(isSubstring("waterbottle", "rb")); //true
// console.log(isSubstring("waterbottle", "elt")); //false
// console.log(isSubstring("waterbottle", "erbottlewat")); //false

// console.log(stringRotation("waterbottle", "elt")); //false
// console.log(stringRotation("waterbottle", "rebottletaw")) //false
// console.log(stringRotation("waterbottle", "bottle")); //false
console.log(stringRotation("waterbottle", "erbottlewat")); //true