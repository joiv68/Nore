import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../image/Logo2.png";
import Klien from "../image/Klien.png";
import Klien1 from "../image/Klien1.png";
import Klien2 from "../image/Klien2.png";
import Klien3 from "../image/Klien3.png";
import Klien4 from "../image/Klien4.png";
import Klien5 from "../image/Klien5.png";
import Klien6 from "../image/Klien6.png";
import Klien7 from "../image/Klien7.png";
import Klien8 from "../image/Klien8.png";
import Klien9 from "../image/Klien9.png";
import NoreLayanan6 from "../image/NoreLayanan6.png";
import NoreLayanan7 from "../image/NoreLayanan7.png";
import Rereteks from "../image/Rereteks.png";
import NonoRere3 from "../image/NonoRere3.png";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";

const Mini = () => {
  return (
    <div>
      <div className="container7">
        <div
          style={{
            display: "flex",
            paddingLeft: 75.21,
            paddingTop: 30,
            fontSize: "24px",
            fontFamily: "Poppins",
          }}
        >
          <Link to="/PemWeb3">
            <p style={{ color: "#319f66" }}> {`< Kembali`}</p>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img src={Logo2} alt="Logo2" height={150} />
          </Link>
        </div>
      </div>
      <div
        style={{
          color: "#319f66",
          fontFamily: "Poppins",
          fontSize: "48px",
          fontWeight: 700,
          width: "70%",
          margin: "0 auto",
        }}
      >
        <p>WEBSITE LANGGANAN MINI SEPERTI APA YANG ANDA INGINKAN?</p>
      </div>
      <div style={{ position: "fixed", display: "flex", right: 0, top: "50%" }}>
        <img src={Rereteks} alt="Rereteks" />
      </div>
      <div
        style={{
          justifyItems: "center",
          justifyContent: "center",
          paddingTop: 80,
        }}
      >
        <Container>
          <Row>
            <Col md={{ span: 20, offset: 5 }}>
              <Card
                style={{ width: "18rem", alignItems: "center", paddingTop: 20 }}
              >
                <img
                  src={NoreLayanan6}
                  alt="NoreLayanan6"
                  height={150}
                  width={150}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 600,
                      fontSize: "32px",
                      paddingBottom: 40,
                    }}
                  >
                    MINI SIMPLE
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 5 }}>
              <Card
                border="success"
                style={{
                  width: "11rem",
                  borderRadius: 17,
                  alignItems: "center",
                }}
              >
                <Card.Body style={{ display: "flex" }}>
                  <Card.Text
                    style={{
                      alignSelf: "flex-end",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#319f66",
                    }}
                  >
                    Rp
                  </Card.Text>
                  <Card.Title
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "48px",
                      color: "#319f66",
                    }}
                  >
                    1,2jt
                  </Card.Title>
                </Card.Body>
                <Card.Footer
                  style={{
                    background: "#ffffff",
                    border: 0,
                    marginTop: -20,
                    color: "#319f66",
                  }}
                >
                  tahun pertama
                </Card.Footer>
              </Card>
            </Col>
            <Col md={{ span: 12, offset: 5 }}>
              <div
                style={{
                  textAlign: "start",
                  color: "#999999",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: 400,
                }}
              >
                <li>Server dan domain</li>
                <li>Template website</li>
                <li>Garansi bug</li>
                <li>Optimasi mobile</li>
                <li>Additional Email: 200rb /email /tahun 500MB</li>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 1 }}>
              <Card
                border="success"
                style={{
                  width: "14rem",
                  borderRadius: 17,
                  alignItems: "center",
                }}
              >
                <Card.Body style={{ display: "flex" }}>
                  <Card.Text
                    style={{
                      alignSelf: "flex-end",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#319f66",
                    }}
                  >
                    Rp
                  </Card.Text>
                  <Card.Title
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "48px",
                      color: "#319f66",
                    }}
                  >
                    600jt
                  </Card.Title>
                </Card.Body>
                <Card.Footer
                  style={{
                    background: "#ffffff",
                    border: 0,
                    marginTop: -20,
                    color: "#319f66",
                  }}
                >
                  tahun berikutnya
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          fontSize: "24px",
          fontWeight: 700,
          paddingTop: 40,
        }}
      >
        <p>KLIEN KAMI</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardGroup
          style={{
            alignItems: "center",
            width: "50%",
          }}
        >
          <Card style={{ borderWidth: 0, alignItems: "center" }}>
            <img src={Klien} alt="Klien" height={61} width={122} />
            <Card.Body>
              <Card.Title>jsmobil.com</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ borderWidth: 0, alignItems: "center" }}>
            <img
              src={Klien1}
              alt="Klien1"
              height={61}
              width={163}
              style={{ backgroundColor: "#A5B3C1" }}
            />
            <Card.Body>
              <Card.Title>cleanandcool.id</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ borderWidth: 0, alignItems: "center" }}>
            <img src={Klien2} alt="Klien2" height={61} width={183} />
            <Card.Body>
              <Card.Title>surgapet.com</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ borderWidth: 0, alignItems: "center" }}>
            <img src={Klien3} alt="Klien3" height={61} width={61} />
            <Card.Body>
              <Card.Title>woodsluck.id</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ borderWidth: 0, alignItems: "center" }}>
            <img src={Klien4} alt="Klien4" height={44.37} width={200} />
            <Card.Body>
              <Card.Title>bactakleen-id.com</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <div style={{ paddingLeft: 950, paddingTop: 30 }}>
        <Link to="PemWeb5" style={{ textDecoration: "none" }}>
          <a
            style={{
              padding: 10,
              paddingLeft: 40,
              paddingRight: 40,
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "24px",
              color: "white",
              boxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
              WebkitBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
              MozBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
              borderRadius: "35px 35px 35px 35px",
              border: "3px solid #319f66",
              background: "#319f66",
            }}
          >
            Pilih
          </a>
        </Link>
      </div>
      <div
        style={{
          paddingLeft: 450,
          margin: -140,
          position: "absolute",
          display: "flex",
        }}
      >
        <img src={NonoRere3} alt="NonoRere3" width={249} height={235} />
      </div>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 5 }}>
            <Card
              style={{ width: "18rem", alignItems: "center", paddingTop: 30 }}
            >
              <img
                src={NoreLayanan7}
                alt="NoreLayanan7"
                height={150}
                width={150}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: "32px",
                    paddingBottom: 30,
                  }}
                >
                  MINI PRIORITAS
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 5 }}>
            <Card
              border="success"
              style={{
                width: "11rem",
                borderRadius: 17,
                alignItems: "center",
              }}
            >
              <Card.Body style={{ display: "flex" }}>
                <Card.Text
                  style={{
                    alignSelf: "flex-end",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#319f66",
                  }}
                >
                  Rp
                </Card.Text>
                <Card.Title
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "48px",
                    color: "#319f66",
                  }}
                >
                  3jt
                </Card.Title>
              </Card.Body>
              <Card.Footer
                style={{
                  background: "#ffffff",
                  border: 0,
                  marginTop: -20,
                  color: "#319f66",
                }}
              >
                tahun pertama
              </Card.Footer>
            </Card>
          </Col>
          <Col md={{ span: 12, offset: 5 }}>
            <div
              style={{
                textAlign: "start",
                color: "#999999",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              <li>Server dan domain</li>
              <li>Template website</li>
              <li>Garansi bug</li>
              <li>Optimal mobile</li>
              <li>Additional Email: 200rb /email /tahun 500MB</li>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 1 }}>
            <Card
              border="success"
              style={{
                width: "14rem",
                borderRadius: 17,
                alignItems: "center",
              }}
            >
              <Card.Body style={{ display: "flex" }}>
                <Card.Text
                  style={{
                    alignSelf: "flex-end",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#319f66",
                  }}
                >
                  Rp
                </Card.Text>
                <Card.Title
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "48px",
                    color: "#319f66",
                  }}
                >
                  1,5jt
                </Card.Title>
              </Card.Body>
              <Card.Footer
                style={{
                  background: "#ffffff",
                  border: 0,
                  marginTop: -20,
                  color: "#319f66",
                }}
              >
                tahun berikutnya
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          fontFamily: "Poppins",
          fontSize: "24px",
          fontWeight: 700,
          paddingTop: 40,
        }}
      >
        <p>KLIEN KAMI</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardGroup
          style={{
            alignItems: "center",
            width: "50%",
          }}
        >
          <Card style={{ alignItems: "center" }}>
            <img src={Klien5} alt="Klien5" height={61} width={185} />
            <Card.Body>
              <Card.Title>antaralogistic.com</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ alignItems: "center" }}>
            <img
              src={Klien6}
              alt="Klien6"
              height={61}
              width={122}
              style={{ backgroundColor: "#A5B3C1" }}
            />
            <Card.Body>
              <Card.Title>muliaservice.id</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ borderWidth: 0, alignItems: "center" }}>
            <img src={Klien7} alt="Klien7" height={61} width={177} />
            <Card.Body>
              <Card.Title>sanori.co.id</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ borderWidth: 0, alignItems: "center" }}>
            <img src={Klien8} alt="Klien8" height={61} width={61} />
            <Card.Body>
              <Card.Title>twinbrotherfood.com</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ borderWidth: 0, alignItems: "center" }}>
            <img src={Klien9} alt="Klien9" height={61} width={61} />
            <Card.Body>
              <Card.Title>kamalanuliajaya.com</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <div style={{ paddingLeft: 950, paddingTop: 30 }}>
        <Link to="PemWeb5" style={{ textDecoration: "none" }}>
          <a
            style={{
              padding: 10,
              paddingLeft: 40,
              paddingRight: 40,
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "24px",
              color: "white",
              boxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
              WebkitBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
              MozBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
              borderRadius: "35px 35px 35px 35px",
              border: "3px solid #319f66",
              background: "#319f66",
            }}
          >
            Pilih
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Mini;
