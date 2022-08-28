import getData from "./getData";

const fetchItems = async (setLoadingItems, itemsPromises, setItemsList) => {
  setLoadingItems(true);

  const values: any[] = await Promise.all(itemsPromises);

  const items = getData(values);

  setItemsList(items);
  setLoadingItems(false);
};

export default fetchItems;
