const solutuon = (n, m) => {
  const gcd = (a, b) => {
    if (b === 0) return a; // 나누어지면 a 리턴
    return gcd(b, a % b); // 나누어지지 않는다면 b와 a%b를 다시 나눈다
  };
  const lcm = (a, b) => (a * b) / gcd(a, b); // 두 수의 곱을 최대공약수로 나눈다.
  return console.log(
    `최대 공약수는? ${gcd(n, m)}, 최대 공배수는? ${lcm(n, m)}`
  );
};
console.log(solutuon(4, 6));