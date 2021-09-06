function PreviewHeader({ resume }) {
    return (
        <div className="preview-header-container">
            <h1>
                {resume.personalInfo.firstName} {resume.personalInfo.lastName}
            </h1>
            <h2>
                {resume.personalInfo.title}
            </h2>
        </div>
    )
}

export default PreviewHeader;