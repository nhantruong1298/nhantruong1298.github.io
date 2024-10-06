import {
  InfoFieldContainer,
  Description,
  Title,
  ProjectsContainer,
  Label,
  TitleAndDescriptionContainer,
  Image,
  Link,
  LinksContainer,
} from "./projects.styles";

import tsImage from "../../assets/images/ts-image.png";
import khImage from "../../assets/images/khmartin-image.png";
import uehImage from "../../assets/images/ueh-image.png";

const Projects = () => {
  const projectsData = [
    {
      name: "Transwap",
      description:
        "The financial company creates mobile apps for international money transfers, currency exchanges, and credit cards",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=com.transwap.luna",
        ios: "https://apps.apple.com/app/id1564013302",
      },
      image: tsImage,
    },
    {
      name: "KH Martin",
      description: "Mobile app for Study Promotion Grant Management",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=com.martin_charity_community",
        ios: "https://testflight.apple.com/join/9qRaV1Jd",
      },
      image: khImage,
    },
    {
      name: "UEH Student",
      description:
        "UEH Official App, integrates student card, manages attendance, and keeps student informed.",
      links: {
        android:
          "https://play.google.com/store/apps/details?id=vn.edu.ueh.student&hl=vi&gl=US",
        ios: "https://apps.apple.com/us/app/ueh-student/id1560073124",
      },
      image: uehImage,
    },
  ];

  return (
    <ProjectsContainer>
      <Label>Projects</Label>
      {projectsData.map((value) => {
        return (
          <InfoFieldContainer>
            <TitleAndDescriptionContainer>
              <Title>{value.name}</Title>
              <Description>{value.description}</Description>
              <LinksContainer>
                Links: &nbsp;
                {value.links.ios && (
                  <Link href={value.links.ios} target="_blank">
                    IOS
                  </Link>
                )}
                {value.links.android && (
                  <div>
                    {" "}
                    , &nbsp;
                    <Link href={value.links.android} target="_blank">
                      Android
                    </Link>
                  </div>
                )}
              </LinksContainer>
            </TitleAndDescriptionContainer>
            <Image alt={value.image} src={value.image}></Image>
          </InfoFieldContainer>
        );
      })}
    </ProjectsContainer>
  );
};

export default Projects;
