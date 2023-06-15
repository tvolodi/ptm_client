import BaseEntity from "../BaseEntity";
import DomainEntity from "./DomainEntity";
import DataType from "./DataType";

class DomainEntityAttribute extends BaseEntity {

    Description: string | undefined;
    DomainEntity!: DomainEntity;
    DomainEntityId!: number;
    DataType!: DataType;
    DataTypeId!: number;
    IsNullable: boolean = true;
    HasIndex: boolean = false;

    EntityLink: DomainEntity | undefined;
}

export default DomainEntityAttribute;