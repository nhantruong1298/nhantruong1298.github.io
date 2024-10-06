import styled from "styled-components";

export const ContactInfoContainer = styled.div`
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

  display: flex;
  flex-direction: column;
  margin-bottom: 128px;
`;

export const Label = styled.div`
  font-size: 42px;
  font-weight: 700;
  margin-top: 120px;
  margin-left: 110px;
  margin-bottom: 64px;
`;

export const Table = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const InfoField = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

export const FieldName = styled.div``;

export const FieldValue = styled.div``;
