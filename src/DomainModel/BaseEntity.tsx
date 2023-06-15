class BaseEntity {

    
    Id: number | undefined;
    Name!: string;
    CreationDateTime: Date | undefined;
    UpdateDateTime: Date | undefined;
    DeleteDateTime: Date | undefined;

    IsDeleted: boolean | undefined;

    constructor(
        id: number | undefined,
        name: string,
        creationDataTime: Date | undefined,
        updateDateTime: Date | undefined,
        deleteDateTime: Date | undefined,
        isDeleted: boolean | undefined,
    ){
        this.Id = id;
        this.Name = name;
        this.CreationDateTime = creationDataTime;
        this.UpdateDateTime = updateDateTime;
        this.DeleteDateTime = deleteDateTime;
        this.IsDeleted = isDeleted;
    }
}

export default BaseEntity;