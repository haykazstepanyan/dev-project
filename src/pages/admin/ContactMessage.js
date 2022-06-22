import { Container } from "@mui/system";
import { messages } from "../../DUMMY_DATA";
import AdminMessagesTable from "../../components/adminMessagesTable";

function createData(id, name, email, subject, message) {
  return { id, name, email, subject, message };
}

const rows = [];

messages.forEach((elem, index) => {
  rows.push(
    createData(index, elem.name, elem.email, elem.subject, elem.message),
  );
});

export default function ContactMessages() {
  return (
    <Container maxWidth="lg" style={{ marginTop: 40, marginBottom: 40 }}>
      <AdminMessagesTable type="message" tableData={rows} />
    </Container>
  );
}
