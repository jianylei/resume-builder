import { Component } from "react";
import PreviewHeader from "./header";
import PreviewMain from "./previewMain";
import SideBar from "./sidebar";

class Preview extends Component{
    render(){
        const {resume} = this.props;

        return(
            <div className="preview-container">
                <div className="content-container">
                    <PreviewHeader resume={resume}/>

                    <div className="summary">{resume.personalInfo.summary}</div>

                    
                    <PreviewMain resume={resume}/>
                </div>
                <SideBar resume={resume}/>
        </div>
        )
    }
}

export default Preview;