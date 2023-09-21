import { createClient } from "contentful";
import Nav from "../../components/molecules/nav/Nav";
const {
  C_SPACE_ID,
  C_DELIVERY_KEY,
} = require("../../helpers/contentful-config");

export async function getStaticProps(context) {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "pageContent",
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
  const home = Page[0].fields;
  return (
    <div className="anchor" id="top">
      <Nav contentModule={MainMenu} />
      <h1>{home.title}</h1>
    </div>
  );
}
