export const HOME_CONTENT = `
query GetHome($slug: String!)  {
    pageHomepageCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        componentListCollection {
          items {
            ... on ComponentHeroBanner {
              __typename
              title
              copy {
                json
              }
              image {
                  title
                  url
                  width
                  height
              }
            }
          }
        }
      }
    }
}
`;

export const HOME_SLUG = `
query {
    pageHomepageCollection{
    items {
      title
      slug
    }
  }
}
`;
