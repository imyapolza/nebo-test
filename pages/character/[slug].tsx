import { useEffect } from "react";
import { CharacterApi } from "../../api";
import DetailedCard from "../../components/DetailedCard/DetailedCard";
import { ICharacter } from "../../types";

interface SlugProps {
  item: ICharacter;
}

const Slug: React.FC<SlugProps> = ({ item }) => {
  useEffect(() => {
    const viewed = sessionStorage.getItem("viewed");

    let items: Array<string> = [];

    if (viewed) {
      items = JSON.parse(viewed);
    }

    console.log("itemsStorage", items, "itemsStorage", item);

    items.push(item.name);

    sessionStorage.setItem("viewed", JSON.stringify(items));
  }, []);

  return (
    <>
      <DetailedCard {...item} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { search } = context.query;

  let character = {};

  try {
    const { results } = await CharacterApi.search(search);

    character = results;
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      item: character[0],
    },
  };
}

export default Slug;
