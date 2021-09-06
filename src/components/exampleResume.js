import uniqid from "uniqid";
const exampleResume = {
    personalInfo: {
        firstName: "John",
        lastName: "Doe",
        title: "Web Developer",
        phone: "(123) 456-7890",
        email: "johndoe@mail.com",
        summary: "Dedicated web developer with five fake years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail. MySQL, Python and Ruby on Rails.",
        link: [{
            id: uniqid(),
            title: "Github",
            url: "github.com/johndoe"
        }, {
            id: uniqid(),
            title: "Portfolio",
            url: "johndoe.johndoe"
        }, {
            id: uniqid(),
            title: "LinkedIn",
            url: "@Johndoe"
        }]
    },
    skills: [{
        id: uniqid(),
        skill: "Python (Django, Flask)"
    }, {
        id: uniqid(),
        skill: "Ruby on Rails"
    }, {
        id: uniqid(),
        skill: "Javascript (NodeJS, ReactJS, Angular)"
    }, {
        id: uniqid(),
        skill: "Database (MySQL, PostgreSQL)"
    }, {
        id: uniqid(),
        skill: "HTML/CSS"
    }, {
        id: uniqid(),
        skill: "Unix, Git"
    }],
    experience: [{
        id: uniqid(),
        company: "Fake Amazon",
        position: "Junior Web Developer",
        city: "Toronto",
        start: "Jan 2019",
        end: "Dec 2021",
        description: [{
            id: uniqid(),
            text: "Did some fake work resulting in a 25% increase in user clicks and subsequently 33% in customer purchases"
        }, {
            id: uniqid(),
            text: "Administer the full lifecycle of software developement of 12 fake critikal projects of the company with 100% on-time delivery"
        }, {
            id: uniqid(),
            text: "Applied version control software (Git) to track, test, and update fake pre-existing source code"
        }]
    }, {
        id: uniqid(),
        company: "Fake RBC",
        position: "Web Developer CO-OP",
        city: "Toronto",
        start: "Jun 2018",
        end: "Dec 2018",
        description: [{
            id: uniqid(),
            text: "Did some fake work resulting in a 25% increase in user clicks and subsequently 33% in customer purchases"
        }, {
            id: uniqid(),
            text: "Administer the full lifecycle of software developement of 12 fake critikal projects of the company with 100% on-time delivery"
        }, {
            id: uniqid(),
            text: "Applied version control software (Git) to track, test, and update fake pre-existing source code"
        }]
    }, {
        id: uniqid(),
        company: "Fake Startup",
        position: "Data Ananlyst CO-OP",
        city: "Toronto",
        start: "Jan 2018",
        end: "Jun 2018",
        description: [{
            id: uniqid(),
            text: "Did some fake work resulting in a 25% increase in user clicks and subsequently 33% in customer purchases"
        }, {
            id: uniqid(),
            text: "Administer the full lifecycle of software developement of 12 fake critikal projects of the company with 100% on-time delivery"
        }, {
            id: uniqid(),
            text: "Applied version control software (Git) to track, test, and update fake pre-existing source code"
        }]
    }],
    projects: [{
        id: uniqid(),
        name: "Poker Simulation",
        description: [{
            id: uniqid(),
            text: "Built fake full stack app to allow users to simulate and visualize outcomes of pokerhands against opponents of different play"
        },{
            id: uniqid(),
            text: "Used: Javascript, SQL, HTML/CSS"
        }]
    }],
    education: [{
        id: uniqid(),
        instituteName: "Fake Harvard",
        city: "Cambridge, MA",
        degree: "B.S.",
        subject: "Computer Science",
        start: "Sep 2014",
        end: "Jun 2018"
    }]
}

export default exampleResume;