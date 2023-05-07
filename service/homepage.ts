import { gql } from "graphql-request";
import getGraphcms from "./config";

const graphcms = getGraphcms();

export const getHomePageData = async () => {
  const query = gql`
  query {
    homes {
      createdAt
      description
      heading
      id
      publishedAt
      subheading
      updatedAt
    }
  }
  `;

  const res = await graphcms.request(query);
  return res.homes;
};
