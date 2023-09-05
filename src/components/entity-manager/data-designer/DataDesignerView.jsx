import { graphql } from "babel-plugin-relay/macro";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { usePreloadedQuery, useQueryLoader } from "react-relay";
import { g_query_vars } from "../../../globals";
import { Suspense, useCallback, useEffect, useState } from "react";
import EntityListView from "../EntityListView";
import EntityItemDetails from "../EntityItemDetails";
import { PanelOperMode } from "../../../base/panel-oper-mode";
import EntityAttrubuteList from "./EntityAttributeList";
import EntityAttributeDetails from "./EntityAttributeDetails";

// const DataDesignerViewQuery = graphql`
//     query DataDesignerViewQuery {
//         domainEntities{
//             ...EntityListViewFragment
//         }
        
//     }
// `;

const DataDesignerViewEntitiesQuery = graphql`
    query DataDesignerViewEntitiesQuery {
        domainEntities{
            edges{
                node{
                    id
                    description
                    name
                    pluralName
                    module {
                        id
                        code
                        name
                    }
                    attributes {
                        id
                        name
                        description
                        dataType{
                            id
                            code
                            name
                        }
                        isNullable
                        hasIndex
                        entityLink{
                            id
                            module{
                                id
                                name
                            }
                            name
                        }
                    }
                }

            }
        }
    }
`;

export const DataDesignerViewModulesQuery = graphql`
    query DataDesignerViewModulesQuery {
        modules {
            edges{
                node{
                    id                    
                    code
                    name
                }
            }
        }
    }
`;

export const DataDesignerViewDataTypesQuery = graphql`
    query DataDesignerViewDataTypesQuery {
        dataTypes {
            edges{
                node{
                    id                    
                    code
                    name
                }
            }
        }
    }
`;


/**
 * 
 * @param {*} params 
 * params.data - query reference from routing
 * @returns 
 */
const DataDesignerView = (params) => {
    console.log("DataDesignerView.params", params)
    
    // Main entity list query loader definition.
    // Using global variable for repeating call query. Can be null at beginning.
    const [entityListQueryRef, entityListLoadQuery] = useQueryLoader(DataDesignerViewEntitiesQuery, params.data) // g_query_vars.domainEntityQueryRef
    // g_query_vars.domainEntityQueryRef = entityListQueryRef;
    
    // TODO: Query loader for dropdown. Consider to move down by component tree.
    const [moduleListQueryRef, loadModuleListQuery] = useQueryLoader(DataDesignerViewModulesQuery,);
    const [dataTypeListQueryRef, loadDataTypeListQuery] = useQueryLoader(DataDesignerViewDataTypesQuery, );

    useEffect(() => {
        entityListLoadQuery({}, { fetchPolicy: "store-or-network" });
        loadModuleListQuery({}, { fetchPolicy: "store-or-network" });
        loadDataTypeListQuery({}, { fetchPolicy: "store-or-network"});
    }, [
        entityListLoadQuery, loadModuleListQuery, loadDataTypeListQuery,
    ]);

    const refreshEntityList = useCallback(() => {
        entityListLoadQuery({}, { fetchPolicy: "network-only" });
    }, [entityListLoadQuery]
    );

    if(entityListQueryRef != null && moduleListQueryRef != null){

        return (
            <>
            {/* <p>{toUpdateData}</p> */}
            <Suspense>
            <ShowChildrenViews 
                        entityListQueryRef={params.data} //entityListQueryRef}
                moduleListQueryRef={moduleListQueryRef}
                dataTypeListQueryRef={dataTypeListQueryRef}
                refreshEntityList={refreshEntityList}
            ></ShowChildrenViews>
            </Suspense>
            </>
        );    
    } else return (
        <><p>Loading...</p></>
    )
};

const ShowChildrenViews = (params) => {

    const queryData = usePreloadedQuery(DataDesignerViewEntitiesQuery, params.entityListQueryRef);

    const [entitySelectedItemIdState, setEntitySelectedItemIdState] = useState(() => {
        if (queryData !== null) {
            const id = queryData.domainEntities.edges[0].node.id;
            return id;
        }
    });

    // Set the details panel operation mode:
    const[entityDetailsModeState, setEntityDetailsModeState] = useState(PanelOperMode.VIEW);

    // Set data table selected row. If data are empty try to prepare a new object.
    const [entitySelectedItemState, setEntitySelectedItemState ] = useState(() => {
            if( queryData != null) {
                const result = queryData.domainEntities.edges[0]; // TODO: replace on more generic shape
                return result;
            }            
        }
    );

// #region SubItemStaff
    const [secondarySelectedItemIdState, setSecondarySelectedItemIdState] = useState("");

    const [secondarySelectedItemState, setSecondarySelectedItemState] = useState({});

    const [secondaryItemDetailsModeState, setSecondaryItemDetailsModeState] = useState(PanelOperMode.VIEW);
    

// #endregion

    const tableData = queryData.domainEntities.edges;

    useEffect( () => {
        let selectedItem = tableData.find(item => {
            const result = item.node.id === entitySelectedItemIdState;
            return result;
        });
        setEntitySelectedItemState(selectedItem);
    }, [tableData, entitySelectedItemIdState])

    return (
        <>
            <Splitter >
                <SplitterPanel>                    
                    <EntityListView
                        key={queryData}
                        domainEntities={queryData} 
                        entitySelectedItemState={entitySelectedItemState}
                        setEntitySelectedItemState={setEntitySelectedItemState}
                        entitySelectedItemIdState={entitySelectedItemIdState}
                        setEntitySelectedItemIdState={setEntitySelectedItemIdState}
                        setEntityDetailsModeState={setEntityDetailsModeState}
                        refreshEntityList={params.refreshEntityList}
                    ></EntityListView>
                </SplitterPanel>
                <SplitterPanel>
                    {entitySelectedItemState != null
                        ?   <EntityItemDetails
                                key={entitySelectedItemState + entityDetailsModeState+entitySelectedItemIdState}
                                entitySelectedItemState={entitySelectedItemState}
                                // setEntitySelectedItem={setEntitySelectedItem}
                                setEntitySelectedItemIdState={setEntitySelectedItemIdState}
                                entityDetailsModeState={entityDetailsModeState}
                                setEntityDetailsModeState={setEntityDetailsModeState}
                                moduleListQueryRef={params.moduleListQueryRef}
                                // setToUpdateData={ params.setToUpdateData }
                                // toUpdateData={params.toUpdateData}
                                // toUpdateChildrenContainer={toUpdateChildrenContainer}
                                // setToUpdateChildrenContainer={setToUpdateChildrenContainer}
                                refreshEntityList={params.refreshEntityList}
                            ></EntityItemDetails>
                        : <p>No data</p>
                    }
                </SplitterPanel>
                <SplitterPanel>
                    {entitySelectedItemState != null
                        ?
                        <EntityAttrubuteList
                            key={secondaryItemDetailsModeState+secondarySelectedItemState}
                            entitySelectedItemState={entitySelectedItemState}
                            secondarySelectedItemState={secondarySelectedItemState}
                            secondarySelectedItemIdState={secondarySelectedItemIdState}
                            secondaryItemDetailsModeState={secondaryItemDetailsModeState}
                            setSecondarySelectedItemState={setSecondarySelectedItemState}
                            setSecondarySelectedItemIdState={setSecondarySelectedItemIdState}
                            setSecondaryItemDetailsModeState={setSecondaryItemDetailsModeState}
                        ></EntityAttrubuteList>
                        : <p>No data</p>
                    }
                </SplitterPanel>
                <SplitterPanel>
                    { entitySelectedItemState != null
                    ?
                        <EntityAttributeDetails
                            key={secondaryItemDetailsModeState + secondarySelectedItemState}
                            entitySelectedItemState={entitySelectedItemState}
                            setEntitySelectedItemState={setEntitySelectedItemState}
                            secondarySelectedItemState={secondarySelectedItemState}
                            secondarySelectedItemIdState={secondarySelectedItemIdState}
                            setSecondarySelectedItemIdState={setSecondarySelectedItemIdState}
                            secondaryItemDetailsModeState={secondaryItemDetailsModeState}
                            setSecondaryItemDetailsModeState={setSecondaryItemDetailsModeState}
                            dataTypeListQueryRef={params.dataTypeListQueryRef}
                        ></EntityAttributeDetails>
                    : <p>No data</p>
                    }

                </SplitterPanel>
            </Splitter>


        </>
    );
}

export default DataDesignerView;