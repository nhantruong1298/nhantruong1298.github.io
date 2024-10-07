import {
  ContactInfoContainer,
  Table,
  Label,
  InfoField,
  FieldName,
  FieldValue,
} from "./contact.styles.jsx";

const Contact = () => {
  const data = {
    email: "nhantruong1298@gmail.com",
    phone: "+84 772 0505 98",
  };

  return (
    <ContactInfoContainer>
      <Label>Contact</Label>
      <Table>
        {Object.entries(data).map(([name, value]) => {
          return <InfoField key={name}>
            <FieldName>{name.toUpperCase()}:</FieldName>
            <FieldValue>{value}</FieldValue>
          </InfoField>;
        })}
      </Table>
    </ContactInfoContainer>
  );
};

export default Contact;
