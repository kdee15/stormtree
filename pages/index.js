import { createClient } from "contentful";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
// import ComponentServiceCard from "../components/blocks/componentServiceCard/ComponentServiceCard";
const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps() {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "page",
    })

    .then((entries) => entries.items);

  // const resServices = await client.getEntries({
  //   content_type: "componentServiceCard",
  // });
  return {
    props: {
      Page: resPage,
      heroBanner: resPage[0].fields.components[0].fields,
      // servicesList: resServices,
    },
    revalidate: 1,
  };
}

export default function Recipes({ heroBanner }) {
  return (
    <div>
      <ComponentHeroBanner heroBanner={heroBanner} />
    </div>
  );
}
