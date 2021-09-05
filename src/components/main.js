import Form from "./form/form"
import Preview from "./preview/preview"

function Main() {
    const[resume, setResume] = useState({
        personalInfo:{
          firstName: "",
          lastName: "",
          title: "",
          phone: "",
          email: "",
          summary: "",
          link:[{
            title: "",
            url: ""
          }]
        },
        experience:[{
          id: uniqid(),
          company: "",
          position: "",
          city: "",
          start: "",
          end: ""
        }],
        education:[{
          id: uniqid(),
          instituteName: "",
          city: "",
          degree: "",
          subject: "",
          start: "",
          end: ""
        }]
      })
    return (
        <div className="main-container">
            <Form />
            <Preview />
        </div>
    );
}

export default Main;