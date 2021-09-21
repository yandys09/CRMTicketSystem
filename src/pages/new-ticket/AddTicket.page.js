import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";

const initialFrmDt = {
  subject: '',
  issueDate: "",
  details: "",
};

export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  useEffect(() => {}, [frmData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmData({
      ...initialFrmDt,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Form submit request received", frmData);
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
          />
        </Col>
      </Row>
    </Container>
  );
};
