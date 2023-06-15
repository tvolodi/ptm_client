import { Environment, Network, RecordSource, Store, } from "relay-runtime";
import { RequestParameters, Variables } from "relay-runtime";
import KeycloakService from "../services/auth/keycloak";

async function fetchQraphQL(params: RequestParameters, variables: Variables){

    // console.log("from fetchQraphQL params:", params);
    // console.log("from fetchQraphQL variables:", variables);

    const response = await fetch(`http://localhost:5098/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${KeycloakService.GetToken()}`,
        },
        body: JSON.stringify({
            query: params.text,
            variables,
        })
    });

    const result = await response.json();

    // console.log("Fetch result:", result);

    return result;
};

const environment = new Environment({
    network: Network.create(fetchQraphQL),
    store: new Store(new RecordSource()),
});

export default environment;