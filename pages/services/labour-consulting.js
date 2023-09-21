import { createClient } from "contentful";
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

  return {
    props: {
      Page: resPage,
    },
    revalidate: 1,
  };
}

export default function Home({ Page }) {
  console.log("Page", Page);
  const data = Page[1].fields;
  console.log("data", data);
  return (
    <div className="anchor" id="top">
      <h1>{data.title}</h1>
    </div>
  );
}
