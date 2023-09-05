
const resourceMap = new Map();

/**
 * A generic resource: given some method to asynchronously load a value - the loader()
 * argument - it allows accessing the state of the resource.
 */
class Resource {
    
    constructor(loader) {
        this._error = null;
        this._loader = loader;
        this._promise = null;
        this._result = null;
    }

    /**
     * Load the resource if it is nesessary
     */
    load(){
        let promise = this._promise;
        if(promise == null){
            promise = this._loader()
                .then(result => {
                    if (result.default) {
                        result = result.default
                    }
                    this._result = result;
                    return result;
                })
                .catch(error => {
                    
                    this._error = error;
                    throw error;
                });
            this._promise = promise;            
        }
        
        return promise;
    }


}