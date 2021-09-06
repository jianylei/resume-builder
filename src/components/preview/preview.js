import { Component } from "react";
import PreviewHeader from "./header";

class Preview extends Component{
    render(){
        const {resume} = this.props;

        return(
            <div className="preview-container">
                <div className="content-container">
                    <PreviewHeader resume={resume}/>
                </div>
                <div className="side-container"></div>
        </div>
        )
    }
}

export default Preview;