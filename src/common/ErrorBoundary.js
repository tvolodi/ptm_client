import React from "react";

/**
 * component for handling errors in a React (sub)tree.
 */
class ErrorBoundary extends React.Component{

    constructor(props) {
        super(props);
        this.state = { error: null };
    };

    static getDerivedStateFromError(error){
        return {
            error,
        };
    }

    render() {
        if (this.state.error != null ) {
            return(
                <div>
                    <div>Error: {this.state.error.message}</div>
                    <div>
                        <pre>{JSON.stringify(this.state.error.source, null, 2)}</pre>
                    </div>
                </div>
            );
        }
        return this.props.children;
    };
}

export default ErrorBoundary;