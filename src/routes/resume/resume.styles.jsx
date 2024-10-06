import styled from "styled-components";

export const ResumeContainer = styled.div`
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

export const ResumeLabel = styled.div`
  font-size: 42px;
  font-weight: 700;
  margin-top: 120px;
  margin-left: 110px;
  margin-bottom: 64px;
`;

export const InfoFieldContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
`;

export const InfoFieldTitle = styled.div`
  font-size: 26px;
  font-weight: 700;
  justify-content: center;
  display: flex;
  flex: 1;
  /* background-color: black; */
`;

export const InfoFieldDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1.25;
`;

export const TimeLine = styled.div`
  font-size: 16px;
  margin-right: 16px;
  white-space: nowrap;
  flex: 2;
`;

export const Role = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Company = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const ProjectDescription = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  /* display: flex; */
`;

export const Responsibility = styled.div`
  margin-bottom: 16px;
  /* display: flex; */
`;

export const Content = styled.li`
  margin: 8px 0;
  font-size: 15.5px;
`;

export const Description = styled.div`
  display: flex;
  margin-bottom: 64px;
  justify-content: start;
`;

export const Detail = styled.div`
  flex: 9;
`;

export const TeamSize = styled.div`
  margin-bottom: 16px;
`;

export const Divider = styled.hr`
  border-top: 1px solid #bbbbbb;
  margin: 80px 32px;
`;

export const Technology = styled.div``;
