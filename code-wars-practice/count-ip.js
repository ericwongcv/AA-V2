function ipsBetween(start, end) {
  const val = ip => ip.split('.').reduce(
    (sum, next, i) => sum + next * Math.pow(256, 3 - i),
    0
  );
  
  return val(end) - val(start);
}

console.log(ipsBetween("150.0.0.0", "150.0.0.1"));
console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
console.log(ipsBetween("50.0.0.0", "50.1.1.1"));
console.log(ipsBetween("1.2.3.4", "5.6.7.8"));
