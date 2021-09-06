import { Component } from "react";

class Preview extends Component{
    render(){
        const {resume} = this.props;

        return(
            <div className="preview-container">
            {resume.personalInfo.firstName}
            {resume.personalInfo.lastName}
            {resume.personalInfo.title}
            {resume.personalInfo.phone}
            {resume.personalInfo.email}
            {resume.personalInfo.summary}
        </div>
        )
    }
}

export default Preview;