import { createClient } from "contentful";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import ComponentFooter from "../components/blocks/componentFooter/ComponentFooter";

const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps() {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resBanner = await client.getEntries({
    content_type: "componentHeroBanner",
  });
  const resFooter = await client.getEntries({
    content_type: "componentFooter",
  });

  return {
    props: {
      footer: resFooter.items[0].fields,
      heroBanner: resBanner.items[0].fields,
    },
    revalidate: 1,
  };
}

export default function Recipes({ footer, heroBanner }) {
  return (
    <div>
      <ComponentHeroBanner heroBanner={heroBanner} />
      <ComponentFooter footer={footer} />
    </div>
  );
}
