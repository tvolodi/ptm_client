import BaseEntity from "../BaseEntity";
import Module from "./Module";

class DomainEntity extends BaseEntity {
    
    description: string | undefined;
    
    module!: Module;
    // TODO: Is moduleId is required? It should be in Module object itself.
    moduleId!: number;

    attributes: DomainEntityAttribute[] | undefined;

    constructor(
        id: number | undefined,
        name: string,
        creationDataTime: Date | undefined,
        updateDateTime: Date | undefined,
        deleteDateTime: Date | undefined,
        isDeleted: boolean | undefined,
        description: string | undefined,
        module: Module,    
        attributes: DomainEntityAttribute[] | undefined
    ){
        super(id, name, creationDataTime, updateDateTime, deleteDateTime, isDeleted);
        this.description = description;
        this.module = module;
        this.attributes = attributes;
    }
}

export default DomainEntity;