function Preview({resume}) {
    return (
        <div className="preview-container">
            {resume.personalInfo.firstName}
            {resume.personalInfo.lastName}
            {resume.personalInfo.title}
            {resume.personalInfo.email}
            {resume.personalInfo.summary}
        </div>
    );
}

export default Preview;