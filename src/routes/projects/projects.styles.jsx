import styled from "styled-components";

export const ProjectsContainer = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 1s ease-in-out;
  opacity: 1;
`;

export const Label = styled.div`
  font-size: 42px;
  font-weight: 700;
  margin-top: 120px;
  margin-left: 112px;
  margin-bottom: 64px;
`;

export const InfoFieldContainer = styled.div`
  margin: 0 0 128px 0;
  display: flex;
  justify-content: center;
`;

export const TitleAndDescriptionContainer = styled.div`
  width: 30%;
  margin-right: 64px;
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Description = styled.div`
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 400px;
  height: 200px;
  object-fit: cover;
  /* border-radius: 12px; */
`;

export const Link = styled.a`
  font-weight: 700;
`;

export const LinksContainer = styled.div`
  display: flex;
`;
