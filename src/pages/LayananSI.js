import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo2 from "../image/Logo2.png";
import Logo from "../image/Logo.png";
import NoreLayanan9 from "../image/NoreLayanan9.png";
import NoreLayanan10 from "../image/NoreLayanan10.png";
import Klien10 from "../image/Klien10.png";
import Klien11 from "../image/Klien11.png";
import Klien12 from "../image/Klien12.png";
import Klien13 from "../image/Klien13.png";
import Slider from "react-slick";
import Inet from "../image/Inet.png";
import WA from "../image/WA.png";
import Message from "../image/Message.png";
import IG from "../image/IG.png";
import FB from "../image/FB.png";

const LayananSI = () => {
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    Infinity: true,
  };

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
                  textAlign: "start",
                }}
              >
                <li>Dokumentasi source code</li>
                <li>Dokumentasi tutorial pengguna</li>
                <li>Garansi bug (3 bulan)</li>
                <li>Instalasi ke server pelanggan & pelatihan</li>
                <p>+ Update / perubahan: kesepakatan lebih lanjut</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
      <div>
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: "48px",
            color: "#319f66",
            width: "70%",
            textAlign: "center",
            paddingLeft: 550,
            paddingTop: 100,
          }}
        >
          LAYANAN PEMBUATAN SISTEM INFORMASI (PREMIUM)
        </p>
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: "24px",
            width: "75%",
            paddingLeft: 400,
            paddingTop: 50,
          }}
        >
          Layanan pembuatan sistem atau layanan premium adalah layanan pembuatan
          sistem yang dapat dicustom sesuai kebutuhan, dapat berbasis website
          dan mobile app (Android/iOS). Range budget mulai dari 10-100jt dengan
          pengerjaan mulai dari 1-4 bulan, 100jt-1M untuk pengerjaan mulai dari
          4-12 bulan, dan 1M+ untuk pengerjaan lebih dari 1 tahun.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: "48px",
          color: "#319f66",
          paddingTop: 150,
        }}
      >
        <p>KLIEN KAMI:</p>
      </div>
      <div
        className="contslide4"
        style={{
          fontFamily: "Poppins",
          fontWeight: "bold",
          width: "70%",
          background: "#39B772",
        }}
      >
        <Slider {...settings}>
          <div>
            <img src={Klien10} alt="Klien10" width={216.67} height={100} />
          </div>
          <div>
            <img src={Klien11} alt="Klien11" width={357.14} height={100} />
          </div>
          <div>
            <img src={Klien12} alt="Klien12" width={379.69} height={100} />
          </div>
          <div>
            <img src={Klien13} alt="Klien13" width={514.55} height={100} />
          </div>
        </Slider>
      </div>
      <div className="footer" style={{ color: "white", marginTop: "15%" }}>
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

export default LayananSI;
