function reverseNumber(num) {
  return Number(Array.from(String(Math.abs(num))).reverse().join('')) * Math.sign(num);
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);
