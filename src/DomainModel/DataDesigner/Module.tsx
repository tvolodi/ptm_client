import BaseEntity from "../BaseEntity";
import DomainEntity from "./DomainEntity";

class Module extends BaseEntity {

    Code!: string;
    
    DomainEntities: DomainEntity[] | undefined;
    
}

export default Module;