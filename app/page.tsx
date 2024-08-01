/** Add your relevant code here for the issue to reproduce */
import { getClient } from "../apollo/ApolloRSC";
import { gql } from "@apollo/client";

const testQuery = gql`
  query {
    post(id: 1) {
      id
      title
      body
    }
  }
`;

const { data } = await getClient().query({ query: testQuery });

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}
