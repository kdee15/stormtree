import { createClient } from "contentful";
import Component2ColumnImageText from "../components/blocks/component2ColumnImageText/Component2ColumnImageText";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import Nav from "../components/molecules/nav/nav";
import ComponentIntro from "../components/organisms/ComponentIntro/ComponentIntro";
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
      // servicesList: resServices,
    },
    revalidate: 1,
  };
}

export default function Recipes({ Page }) {
  const heroBanner = Page[0].fields.components[0].fields;
  const componentAbout = Page[0].fields.components[1].fields;
  const componentTania = Page[0].fields.components[2].fields;
  const componentAdele = Page[0].fields.components[3].fields;
  console.log("Page", Page);
  return (
    <>
      <Nav />
      <ComponentHeroBanner heroBanner={heroBanner} />
      <Component2ColumnImageText contentModule={componentAbout} />
      <Component2ColumnImageText contentModule={componentTania} />
      <Component2ColumnImageText contentModule={componentAdele} />
    </>
  );
}
