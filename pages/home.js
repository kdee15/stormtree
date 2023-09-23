import { createClient } from "contentful";
import Nav from "../components/molecules/nav/Nav";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps(context) {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "pageHome",
      include: 10,
    })

    .then((entries) => entries.items);

  const resMenu = await client.getEntries({
    content_type: "componentMenu",
    include: 10,
  });

  return {
    props: {
      Page: resPage,
      MainMenu: resMenu.items[0].fields,
    },
    revalidate: 1,
  };
}

export default function Home({ Page, MainMenu }) {
  console.log("Page", Page);
  const componentHeroBanner = Page[0].fields.componentList[0].fields;
  return (
    <div className="anchor" id="top">
      <ComponentHeroBanner contentModule={componentHeroBanner} />
      <Nav contentModule={MainMenu} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
