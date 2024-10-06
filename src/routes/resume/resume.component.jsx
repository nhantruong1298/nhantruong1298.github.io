import {
  Company,
  Content,
  InfoFieldContainer,
  InfoFieldDescriptionContainer,
  InfoFieldTitle,
  ProjectDescription,
  Responsibility,
  ResumeContainer,
  ResumeLabel,
  Role,
  TimeLine,
  Description,
  TeamSize,
  Divider,
  Detail,
  Technology,
} from "./resume.styles.jsx";

const Resume = () => {
  const data = [
    {
      company: "Freelancer Job",
      role: "Flutter Developer",
      timeline: "Jul 2023 - Present",
      projectDescription: "Mobile App for Study Promotion Grant Management",
      responsibility: [
        "Work directly with clients, estimate task timelines, and provide suggestions for application development.",
        "Build the project from scratch using the Flutter framework for Android, iOS, and web app platforms.",
        "Perform functions within the application such as sign-in/sign-up/account deletion, image selection and upload to server, notification, student information creation, and member permission assignment.",
        "Manage the mobile app on the Google Play Store and App Store.",
        "Configure automated build and deployment of the mobile application with Code Magic CI/CD.",
        "Deploy the web app with Firebase hosting.",
        
      ],
      technology: "Firebase, Supabase, Magic Code CI/CD.",
      teamSize: "3",
    },
    {
      company: "TranSwap Private Limited",
      role: "Flutter Developer",
      timeline: "Jul 2021 - Oct 2023",
      projectDescription:
        "The financial company creates mobile apps for international money transfers, currency exchanges, and credit cards",
      responsibility: [
        "Receive work from lead and estimate completion time.",
        "Perform functions within the application such as local authentication, image selection and upload to server, account creation/deletion, OTP transaction verification, shortcut creation, activation of virtual credit cards, receipt download and storage, etc...",
        "Write units test for classes and functions.",
        "Collaborate with the backend team to create APIs for the mobile app.",
        "Fix bugs and test the application on devices.",
      ],
      technology: "Firebase, Microsoft Azure, Magic Code CI/CD, Figma.",
      teamSize: "3",
    },
    {
      company: "Freelancer Job",
      role: "Flutter Developer",
      timeline: "Sep 2022 - Nov 2022",
      projectDescription: "Furniture Repair Staff: Mobile App for Check-in, Photos E-Signatures",
      responsibility: [
        "Fix bug and improve app features.",
        "Code UI based on Figma specifications.",
      ],
      technology: "Flutter, GetX, Dio+Retrofit.",
      teamSize: "2",
    },
    {
      company: "AziWorld VietNam",
      role: "Fresher Flutter Developer",
      timeline: "Dec 2020 - Jul 2021",
      projectDescription:
        "UEH Official App, integrates student card, manages attendance, and keeps student informed.",
      responsibility: [
        "Research and learning about Flutter framework, learning to track and fix bugs.",
        "Reading and learning company's project.",
      ],
      technology: "Flutter, Firebase",
      teamSize: "4",
    },
  ];

  return (
    <ResumeContainer>
      <ResumeLabel>Resume</ResumeLabel>

      <InfoFieldContainer>
        <InfoFieldTitle>
          Work <br />
          Experience
        </InfoFieldTitle>
        <InfoFieldDescriptionContainer>
          {data.map((data) => {
            return (
              <Description>
                <TimeLine>{data.timeline}</TimeLine>
                <Detail>
                  <Company c>{data.company}</Company>
                  <Role>
                    <b>Role:</b> {data.role}
                  </Role>
                  <ProjectDescription>
                    <b>Project description: </b> {data.projectDescription}
                  </ProjectDescription>
                  <Responsibility>
                    <b>Responsibility</b>
                    <ul>
                      {data.responsibility.map((res) => {
                        return <Content className="content">{res}</Content>;
                      })}
                    </ul>
                  </Responsibility>
                  <TeamSize>
                    <b>Team size:</b> {data.teamSize}
                  </TeamSize>

                  <Technology>
                  <b>Technology description:</b> {data.technology}

                  </Technology>

                </Detail>
              </Description>
            );
          })}
        </InfoFieldDescriptionContainer>
      </InfoFieldContainer>

      <Divider />
      <InfoFieldContainer>
        <InfoFieldTitle>Courses</InfoFieldTitle>
        <InfoFieldDescriptionContainer>
          ZTM Academy <br />
          Complete React Developer (Redux, Hooks, GraphQL)
        </InfoFieldDescriptionContainer>
      </InfoFieldContainer>

      <Divider />
      <InfoFieldContainer>
        <InfoFieldTitle>Education</InfoFieldTitle>
        <InfoFieldDescriptionContainer>
          Ho Chi Minh Open University (2016 - 2020) <br />
          Computer science
        </InfoFieldDescriptionContainer>
      </InfoFieldContainer>
    </ResumeContainer>
  );
};

export default Resume;
