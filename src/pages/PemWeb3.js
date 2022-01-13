import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Background3 } from "../assets/Background3.svg";
import Logo from "../image/Logo.png";
import Benefit from "../image/Benefit.png";
import NonoRere3 from "../image/NonoRere3.png";
import NoreLayanan from "../image/NoreLayanan.png";
import NoreLayanan1 from "../image/NoreLayanan1.png";
import Rereteks from "../image/Rereteks.png";
import Inet from "../image/Inet.png";
import WA from "../image/WA.png";
import Message from "../image/Message.png";
import IG from "../image/IG.png";
import FB from "../image/FB.png";
import { Card } from "react-bootstrap";

const PemWeb3 = () => {
  return (
    <div>
      <div>
        <div
          className="Background3"
          style={{ position: "absolute", top: 0, zIndex: -1, display: "flex" }}
        >
          <Background3 />
        </div>
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
            <Link to="/Pemweb2">
              <p style={{ color: "white" }}> {`< Kembali`}</p>
            </Link>
          </div>
          <div style={{ display: "flex", paddingLeft: 300 }}>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <div
          style={{ display: " flex", paddingLeft: 254, alignItems: "center" }}
        >
          <img src={Benefit} alt="Benefit" />
          <h1
            style={{
              width: "50%",
              fontFamily: "poppins",
              fontSize: "48px",
              color: "white",
              paddingLeft: 25,
              textAlign: "start",
            }}
          >
            BENEFIT YANG DIDAPATKAN JIKA ANDA BERLANGGANAN DI NORE
          </h1>
        </div>
        <div className="container1">
          <div
            style={{
              width: "100%",
              textAlign: "start",
              paddingLeft: 384,
              color: "white",
              fontFamily: "Poppins",
              fontSize: "24px",
            }}
          >
            <li>Satu nama domain</li>
            <li>Hosting penyimpanan website</li>
            <li>Optimasi tampilan mobile/smartphone</li>
            <li>Pemeliharaan dan perbaikan bug website</li>
            <li>Konsultasi kebutuhan atau permasalahan</li>
            <li>Troubleshooting (perbaikan error/bug)</li>
            <li>Update versi CMS ataupun plugin terkait</li>
            <li>
              Keamanan website(SSL, DDOS, Injections, BruteForce, Enkripsi,
              Manajemen Credentials)
            </li>
            <li>Jaminan dan penjagaan uptime server sampai dengan 99,99%</li>
          </div>
          <div>
            <img src={NonoRere3} alt="NonoRere3" height={290} />
          </div>
        </div>
      </div>
      <div>
        <div
          style={{ position: "fixed", display: "flex", right: 0, top: "50%" }}
        >
          <img src={Rereteks} alt="Rereteks" />
        </div>
      </div>
      <div>
        <h1
          style={{
            color: "#319f66",
            paddingTop: 400,
            fontFamily: "Poppins",
            fontSize: "48px",
            paddingBottom: 70,
          }}
        >
          WEBSITE LANGGANAN SEPERTI APA YANG ANDA INGINKAN?
        </h1>
      </div>
      <div
        className="container2"
        style={{
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/PemWeb4">
          <Card
            style={{ width: "27rem", alignItems: "center", paddingTop: 30 }}
          >
            <img src={NoreLayanan1} alt="NoreLayanan1" />
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
                NORE
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
                Layanan website berlangganan andalan NORE (No Repot, No Rempong)
                termasuk dengan server, domain, garansi dan pengoperasian oleh
                tim NORE
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Card style={{ width: "27rem", alignItems: "center", paddingTop: 30 }}>
          <img src={NoreLayanan} alt="NoreLayanan" />
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
              MINI
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

export default PemWeb3;
