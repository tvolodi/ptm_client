import React, { useEffect } from "react";
import { graphql } from 'babel-plugin-relay/macro';
import { useQueryLoader, usePreloadedQuery, PreloadedQuery } from "react-relay";
import type { DictionariesViewQuery as DictionariesViewQueryType } from "./__generated__/DictionariesViewQuery.graphql";
import EntityListView from "./EntityListView";

export const DictionariesViewQuery = graphql`
    query DictionariesViewQuery {
        domainEntities (
            first: 100 
            order: [
                { name: DESC}
            ]
        )
        {    
            edges{
                cursor
                node {
                    id
                    description
                    name
                    module {
                        id
                        code
                        name
                    }
                }
            }
            pageInfo 
            {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            totalCount
        }
    }
`;



const DictionariesView = () => {

    const [queryReference, loadQuery, disposeQuery] = useQueryLoader<DictionariesViewQueryType>(
        DictionariesViewQuery
    );

    useEffect(() => {
        loadQuery({}, {fetchPolicy: 'store-or-network'});
    }, [loadQuery]);

    if(!!queryReference){
        
        return (
            <>
                <p>Entity list view </p>
            </>
            // <ShowEntityList queryReference={queryReference}></ShowEntityList>
        );
    } else 
    {
        return <p>Loading...</p>
    }
}



export default DictionariesView;