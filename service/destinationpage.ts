import { gql } from "graphql-request";
import getGraphcms from "./config";

const graphcms = getGraphcms();

export const getDestinationPageData = async () => {
  const query = gql`
  query {
    destinations {
      createdAt
      id
      publishedAt
      subheading
      updatedAt
      destinationData
    }
  }
  `;

  const res = await graphcms.request(query);
  return res.destinations;
};
