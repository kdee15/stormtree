import classes from "./Projects.module.scss";

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

export default function Project({ project }) {
  return (
    <div className={classes.oProjectPage}>
      <h1>PAGE</h1>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { project } = params;

  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${C_DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: PAGE_CONTENT,
      variables: {
        slug: project,
      },
    }),
  });

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const [projectData] = data.pageCollection.items;

  return {
    props: { project: projectData },
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
  const projectSlug = data.pageCollection.items;
  const paths = projectSlug.map(({ slug }) => {
    return {
      params: { project: slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
