const fillArray = (n: number) => {
  let arr = [];
  if (n) for (let i = 1; i <= n; ) arr.push(i++);
  return arr;
};

export default fillArray;
