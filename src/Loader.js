import React from "react";
import  "./styles/loading.scss"

class Loader extends React.Component{
    render(){
        return(
            <div className="loading-screen">
                <div className="loader-section">
                    <div className="loader-image"><i className="fas fa-sync-alt fa-spin"></i></div>
                    <div className="loader-text">Loading...</div>
                </div>
            </div>
        )
    }
}

export default Loader;