import { createClient } from "contentful";
import Component2ColumnImageText from "../components/blocks/component2ColumnImageText/Component2ColumnImageText";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import Nav from "../components/molecules/nav/Nav";
import FounderProfile from "../components/organisms/founderProfile/FounderProfile";
import ServiceComponent from "../components/organisms/serviceComponent/ServiceComponent";
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

  return {
    props: {
      Page: resPage,
    },
    revalidate: 1,
  };
}

export default function Recipes({ Page }) {
  const heroBanner = Page[0].fields.components[0].fields;
  const componentAbout = Page[0].fields.components[1].fields;
  const componentTania = Page[0].fields.components[2].fields;
  const componentAdele = Page[0].fields.components[3].fields;
  const componentTMS = Page[0].fields.components[4].fields;
  const componentLC = Page[0].fields.components[5].fields;
  const componentTraining = Page[0].fields.components[6].fields;
  return (
    <div className="anchor" id="top">
      <Nav />
      <ComponentHeroBanner heroBanner={heroBanner} />
      <div className="anchor" id="about"></div>
      <Component2ColumnImageText contentModule={componentAbout} />
      <div className="anchor" id="tania"></div>
      <FounderProfile contentModule={componentTania} />
      <div className="anchor" id="adele"></div>
      <FounderProfile contentModule={componentAdele} />
      <div className="anchor" id="management"></div>
      <ServiceComponent contentModule={componentTMS} />
      <div className="anchor" id="consulting"></div>
      <ServiceComponent contentModule={componentLC} />
      <div className="anchor" id="training"></div>
      <ServiceComponent contentModule={componentTraining} />
    </div>
  );
}
