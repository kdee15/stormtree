import { createClient } from "contentful";
import ComponentHeroBanner from "../../components/blocks/componentHeroBanner/ComponentHeroBanner";
import Footer from "../../components/blocks/componentFooter/ComponentFooter";
import Nav from "../../components/molecules/nav/Nav";
import ComponentBodyCopy from "../../components/organisms/componentBodyCopy/ComponentBodyCopy";
const {
  C_SPACE_ID,
  C_DELIVERY_KEY,
} = require("../../helpers/contentful-config");

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
  const pageItem = legalPage[2].fields;
  const heroBanner = pageItem.components[0].fields;
  const bodyCopy = pageItem.components[1].fields;
  const componentFooter = pageItem.components[2].fields;

  return (
    <div className="anchor" id="top">
      <ComponentHeroBanner heroBanner={heroBanner} />
      <ComponentBodyCopy contentModule={bodyCopy} />
      <Footer contentModule={componentFooter} />
    </div>
  );
}
