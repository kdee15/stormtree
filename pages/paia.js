import { createClient } from "contentful";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import Footer from "../components/blocks/componentFooter/ComponentFooter";
import Nav from "../components/molecules/nav/Nav";
const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps() {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "legalPage",
      include: 10,
    })

    .then((entries) => entries.items);

  return {
    props: {
      legalPage: resPage,
    },
    revalidate: 1,
  };
}

export default function Home({ legalPage }) {
  const heroBanner = legalPage[0].fields.components[0].fields;
  //   const componentFooter = Page[1].fields.components[9].fields;

  console.log("legalPage", heroBanner);
  return (
    <div className="anchor" id="top">
      <Nav />
      <ComponentHeroBanner heroBanner={heroBanner} />
      {/* <Footer contentModule={componentFooter} /> */}
    </div>
  );
}
