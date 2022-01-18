import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo2 from "../image/Logo2.png";
import NoreLayanan9 from "../image/NoreLayanan9.png";
import NoreLayanan10 from "../image/NoreLayanan10.png";

const LayananSI = () => {
  return (
    <div>
      <div className="container2">
        <div
          style={{
            display: "flex",
            paddingLeft: 75.21,
            paddingTop: 30,
            fontSize: "24px",
            fontFamily: "Poppins",
          }}
        >
          <Link to="/PemWeb">
            <p style={{ color: "#319f66" }}> {`< Kembali`}</p>
          </Link>
        </div>
        <div style={{ display: "flex", paddingLeft: 200 }}>
          <Link to="/">
            <img src={Logo2} alt="Logo2" />
          </Link>
        </div>
      </div>
      <div
        className="container2"
        style={{
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/PemWeb4" style={{ textDecoration: "none" }}>
          <Card
            style={{ width: "27rem", alignItems: "center", paddingTop: 30 }}
          >
            <img src={NoreLayanan9} alt="NoreLayanan9" />
            <Card.Body>
              <Card.Title
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "32px",
                  color: "#3F3F3F",
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                LANGGANAN
              </Card.Title>
              <Card.Text
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "22px",
                  width: "90%",
                  color: "#999999",
                  width: "85%",
                  textAlign: "start",
                }}
              >
                <li>Biaya tahunan flat</li>
                <li>Termasuk server</li>
                <li>Garansi bug & maintenance</li>
                <li>Tambah fitur minor</li>
                <li>Backup database</li>
                <li>Keamanan</li>
                <p>+ Major feature: kesepakatan lebih lanjut</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/Mini" style={{ textDecoration: "none" }}>
          <Card
            style={{ width: "27rem", alignItems: "center", paddingTop: 30 }}
          >
            <img src={NoreLayanan10} alt="NoreLayanan10" />
            <Card.Body>
              <Card.Title
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "32px",
                  color: "#3F3F3F",
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                LEPAS
              </Card.Title>
              <Card.Text
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "22px",
                  width: "90%",
                  color: "#999999",
                  width: "85%",
                }}
              >
                Layanan website berlangganan untuk kebutuhan website statis atau
                tanpa pengoperasian. Layanan sudah termasuk garansi, server, dan
                domain.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default LayananSI;
