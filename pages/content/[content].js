import classes from "./Content.module.scss";

const {
  C_DELIVERY_KEY,
  C_GRAPHQL_URL,
} = require("../../helpers/contentful-config");
const { PAGE_CONTENT, PAGE_SLUG } = require("../../helpers/data/CONTENT_PAGES");

/**
 * Initial page load to access users browser information
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function ContentPage({ content }) {
  console.log("project", content);
  const { title } = content;
  return (
    <div className={classes.oProjectPage}>
      <h1>PAGE {title}</h1>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { content } = params;

  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${C_DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: PAGE_CONTENT,
      variables: {
        slug: content,
      },
    }),
  });

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const [contentData] = data.pageCollection.items;

  return {
    props: { content: contentData },
  };
}

export async function getStaticPaths() {
  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${C_DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: PAGE_SLUG,
    }),
  });

  if (!result.ok) {
    return {};
  }

  const { data } = await result.json();
  const contentSlug = data.pageCollection.items;
  const paths = contentSlug.map(({ slug }) => {
    return {
      params: { content: slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
