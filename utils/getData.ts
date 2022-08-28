const getData = (values) => {
  const items = values.reduce((acc, curr) => {
    acc.push(curr.data);

    return acc;
  }, []);

  return items;
};

export default getData;
