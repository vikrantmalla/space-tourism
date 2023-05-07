import { GraphQLClient } from "graphql-request";

let graphcms: any;

export default function getGraphcms() {
  if (!graphcms) {
    graphcms = new GraphQLClient(`${process.env.GRAPHCMS_ENDPOINT}`, {
      headers: {
        Authorization: `Bearer ${process.env.GRAPHCMS_ACCESS_TOKEN}`,
      },
    });
    return graphcms;
  }
  return graphcms;
}
