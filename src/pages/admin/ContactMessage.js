import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { useDispatch } from "react-redux";
import { showSnackbar } from "../../redux/app/appSlice";

import AdminMessagesTable from "../../components/adminMessagesTable";
import useFetch from "../../hooks/useFetch";

export default function ContactMessages() {
  const [contactMessages, setContactMessages] = useState();
  const dispatch = useDispatch();

  const { data: contactsData, error: contactsError } = useFetch("/contacts");

  useEffect(() => {
    if (contactsData) {
      setContactMessages(contactsData.data);
    }
  }, [contactsData]);

  useEffect(() => {
    if (contactsError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [contactsError, dispatch]);

  const setDeleteContactData = (contactData) => {
    if (contactData?.data) {
      const { id } = contactData.data;
      const newState = contactMessages.filter((elem) => elem.id !== id);
      setContactMessages(newState);
    }
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: 40, marginBottom: 40 }}>
      {contactMessages && (
        <AdminMessagesTable
          setDeleteContactData={(value) => setDeleteContactData(value)}
          pageType="message"
          tableData={contactMessages}
        />
      )}
    </Container>
  );
}
