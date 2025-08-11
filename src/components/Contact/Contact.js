import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const CONTACT_EMAIL = "waranmounesh91@gmail.com";

  function handleSubmit(event) {
    event.preventDefault();
    const subject = `Portfolio contact from ${name || "Anonymous"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Get in <strong className="purple">Touch</strong>
        </h1>
        <p style={{ color: "white" }}>
          Have a question or want to work together? Send me a message.
        </p>

        <Row className="justify-content-center" style={{ paddingBottom: 30 }}>
          <Col md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label className="text-light">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="contactMessage">
                <Form.Label className="text-light">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;


