var n = prompt('gfggg', 0)
function reverse() {  
  return Number(Array.from(String(Math.abs(n))).reverse().join('')) * Math.sign(n);
}

console.log(reverse(144));
console.log(reverse(-90000));