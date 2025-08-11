import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Using existing images as placeholders. Replace with your certificate images later.
import cert1 from "../../Assets/Projects/edureka.png";
import cert2 from "../../Assets/Projects/hackup.png";
import cert3 from "../../Assets/Projects/vaultof codes.png";
import cert4 from "../../Assets/Projects/cyber.png";
import cert5 from "../../Assets/Projects/App.png";
import cert6 from "../../Assets/Projects/dev.png";
import cert7 from "../../Assets/Projects/experience pbl.png";
import cert8 from "../../Assets/Projects/ict.png";
import cert9 from "../../Assets/Projects/oracle.png";
import cert10 from "../../Assets/Projects/moe.png";
import cert11 from "../../Assets/Projects/mern.png";


function CertificatePage() {
  const certificates = [
    { img: cert1, title: "Certificate 1" },
    { img: cert2, title: "Certificate 2" },
    { img: cert3, title: "Certificate 3" },
    { img: cert4, title: "Certificate 4" },
    { img: cert5, title: "Certificate 5" },
    { img: cert6, title: "Certificate 6" },
    { img: cert7, title: "Certificate 7" },
    { img: cert8, title: "Certificate 8" },
    { img: cert9, title: "Certificate 9" },
    { img: cert10, title: "Certificate 10" },
    { img: cert11, title: "Certificate 11" },
    
  ];

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>A few of my recent certifications.</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certificates.map((c, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <a href={c.img} target="_blank" rel="noreferrer">
                <img
                  src={c.img}
                  alt={c.title}
                  className="img-fluid"
                  style={{ borderRadius: 8, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
                />
              </a>
              <h5 style={{ marginTop: 12, color: "#ddd" }}>{c.title}</h5>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default CertificatePage;


