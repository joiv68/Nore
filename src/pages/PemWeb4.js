import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../image/Logo2.png";
import Ikon from "../image/Ikon.png";
import Rereteks from "../image/Rereteks.png";
import NoreLayanan2 from "../image/NoreLayanan2.png";
import NoreLayanan1 from "../image/NoreLayanan1.png";
import NonoRere4 from "../image/NonoRere4.png";
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
import WA from "../image/WA.png";
import Message from "../image/Message.png";
import IG from "../image/IG.png";
import FB from "../image/FB.png";
import Logo from "../image/Logo.png";
import Inet from "../image/Inet.png";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";

const PemWeb4 = () => {
  return (
    <div>
      <div className="container1">
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
        <div>
          <Link to="/">
            <img src={Logo2} alt="Logo2" align="right" />
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", paddingLeft: 323, paddingTop: 130 }}>
        <img src={Ikon} alt="Ikon" height={240} />
        <div style={{ textAlign: "start", paddingLeft: 50 }}>
          <h1
            style={{
              color: "#319F66",
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "48px",
            }}
          >
            Pengoperasian NORE
          </h1>
          <div
            style={{
              color: "#999999",
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "24px",
            }}
          >
            <li>Menambah, menghapus, mengedit, mengedit konten website</li>
            <li>Menambah halaman atau section baru</li>
            <li>Mengoptimasi SEO</li>
            <li>Permintaan statistik website</li>
            <li>Backup data dan konten</li>
            <li>
              {
                "Pengerjaan sesuai urutan Premium>Prioritas>Simpel kemudian tanggal permintaan"
              }
            </li>
            <li>
              Permintaan pengoperasian dapat langsung mengkontak pihak Nore
            </li>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          display: "flex",
          right: 0,
          top: "50%",
          zIndex: 2,
        }}
      >
        <img src={Rereteks} alt="Rereteks" />
      </div>
      <div
        style={{
          color: "#319F66",
          paddingLeft: 350,
          paddingTop: 50,
          fontWeight: 700,
          fontFamily: "Poppins",
          fontSize: "48px",
          width: "80%",
        }}
      >
        <p>WEBSITE LANGGANAN NORE SEPERTI APA YANG ANDA INGINKAN?</p>
      </div>
      <div
        style={{
          justifyItems: "center",
          justifyContent: "center",
          paddingTop: 80,
        }}
      >
        <div
          style={{
            paddingLeft: 240,
            position: "absolute",
            display: "flex",
          }}
        >
          <img src={NonoRere4} alt="NonoRere4" />
        </div>
        <Container>
          <Row>
            <Col md={{ span: 20, offset: 5 }}>
              <Card
                style={{ width: "18rem", alignItems: "center", paddingTop: 20 }}
              >
                <img
                  src={NoreLayanan2}
                  alt="NoreLayanan2"
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
                    SIMPLE
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
                  width: "12rem",
                  borderRadius: 17,
                  alignItems: "center",
                }}
              >
                <Card.Body style={{ display: "flex" }}>
                  <p
                    style={{
                      alignSelf: "flex-end",
                      color: "#319F66",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                    Rp
                  </p>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: "48px",
                      color: "#319F66",
                    }}
                  >
                    2jt
                  </p>
                  <p
                    style={{
                      alignSelf: "flex-end",
                      color: "#319F66",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                    /tahun
                  </p>
                </Card.Body>
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
                <li>Pengeoperasian website 30x/tahun</li>
                <li>Email perusahaan (limit 1 email, 300MB/email)</li>
              </div>
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
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 5 }}>
            <Card
              style={{ width: "18rem", alignItems: "center", paddingTop: 30 }}
            >
              <img
                src={NoreLayanan1}
                alt="NoreLayanan1"
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
                  PRIORITAS
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
                width: "12rem",
                borderRadius: 17,
                alignItems: "center",
              }}
            >
              <Card.Body style={{ display: "flex" }}>
                <p
                  style={{
                    alignSelf: "flex-end",
                    color: "#319F66",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "14px",
                  }}
                >
                  Rp
                </p>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "48px",
                    color: "#319F66",
                  }}
                >
                  5jt
                </p>
                <p
                  style={{
                    alignSelf: "flex-end",
                    color: "#319F66",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "14px",
                  }}
                >
                  /tahun
                </p>
              </Card.Body>
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
              <li>Website custom</li>
              <li>Garansi bug</li>
              <li>Optimasi mobile</li>
              <li>Pengoperasian website 100x/tahun</li>
              <li>Email perusahaan (limit 5 email, 500MB /email</li>
            </div>
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
      <div className="footer" style={{ color: "white", marginTop: "35%" }}>
        <div className="row">
          <div className="container1">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <img className="kiri" src={Logo} alt="logo" height={120} />
              </div>
              <div
                style={{
                  textAlign: "start",
                  width: "46.5%",
                  fontFamily: "Open Sans",
                }}
              >
                <p>
                  Tim Nore menyediakan layanan pembuatan website, sistem
                  informasi dan pengembangan aplikasi beserta pemeliharaannya.
                  Dengan harga terjangkau dan ditangani langsung oleh staf IT
                  berpengalaman, Anda akan mendapatkan layanan konsultasi
                  sebelum dan selama berlangganan.
                </p>
              </div>
            </div>
            <div className="row">
              <div style={{ width: "30%" }}>
                <h1 style={{ fontFamily: "poppins", fontSize: "24px" }}>
                  PROFIL
                </h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "41px",
                  }}
                >
                  <img src={Inet} alt="Inet" />
                  <p
                    style={{
                      fontFamily: "poppins",
                      fontSize: "18px",
                      paddingLeft: "5px",
                    }}
                  >
                    {" "}
                    nore.web.id
                  </p>
                </div>
              </div>
              <div style={{ width: "30%" }}>
                <h1 style={{ fontFamily: "poppins", fontSize: "24px" }}>
                  KONTAK
                </h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "22px",
                  }}
                >
                  <img src={WA} alt="WA" />
                  <p
                    style={{
                      fontFamily: "poppins",
                      fontSize: "18px",
                      paddingLeft: "5px",
                    }}
                  >
                    {" "}
                    +62 811 2772 788
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "22px",
                  }}
                >
                  <img src={Message} alt="Message" />
                  <p
                    style={{
                      fontFamily: "poppins",
                      fontSize: "18px",
                      paddingLeft: "5px",
                    }}
                  >
                    {" "}
                    cs@nore.web.id
                  </p>
                </div>
              </div>
              <div style={{ width: "27%" }}>
                <h1 style={{ fontFamily: "poppins", fontSize: "24px" }}>
                  {" "}
                  MEDIA SOSIAL
                </h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "32px",
                  }}
                >
                  <img src={IG} alt="IG" />
                  <p
                    style={{
                      fontFamily: "poppins",
                      fontSize: "18px",
                      paddingLeft: "5px",
                    }}
                  >
                    {" "}
                    nore.web.id
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "32px",
                  }}
                >
                  <img src={FB} alt="FB" />
                  <p
                    style={{
                      fontFamily: "poppins",
                      fontSize: "18px",
                      paddingLeft: "5px",
                    }}
                  >
                    {" "}
                    Nore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer1">
        <p style={{ fontFamily: "Open Sans" }}>
          Nore Inovasi © 2021.All right reserved
        </p>
      </div>
    </div>
  );
};

export default PemWeb4;
