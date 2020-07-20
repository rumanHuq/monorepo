import { InMemoryCache } from "@apollo/client";
import clientOnlyResolvers from "@/resolvers/clientOnly";

const cache: InMemoryCache = new InMemoryCache({ typePolicies: {} });

export interface LocalStateShape {
  isLoggedIn: boolean;
}

cache.writeQuery<LocalStateShape>({
  data  : { isLoggedIn: false },
  query : clientOnlyResolvers.Query.IS_LOGGED_IN,
});

export default cache;