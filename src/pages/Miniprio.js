import React from "react";
import { Link } from "react-router-dom";
import NonoRere11 from "../image/NonoRere11.png";
import Gambar from "../image/Gambar.png";
import Inet from "../image/Inet.png";
import WA from "../image/WA.png";
import Message from "../image/Message.png";
import IG from "../image/IG.png";
import FB from "../image/FB.png";
import Logo from "../image/Logo.png";
import Select from "react-select";
import { ReactComponent as Background4 } from "../assets/Background4.svg";
import NoreLayanan8 from "../image/NoreLayanan8.png";
import NonoRere5 from "../image/NonoRere5.png";
import { Button, Col, Form } from "react-bootstrap";

const Miniprio = () => {
  return (
    <div>
      <div
        className="Background4"
        style={{ position: "absolute", top: 0, zIndex: -1, display: "flex" }}
      >
        <Background4 />
      </div>
      <div className="container7">
        <div
          style={{
            display: "flex",
            paddingLeft: 75.21,
            paddingTop: 30,
            fontSize: "1.3vw",
            fontFamily: "Poppins",
          }}
        >
          <Link to="/PemWeb5">
            <p style={{ color: "white" }}> {`< Kembali`}</p>
          </Link>
        </div>
        <div style={{ display: "flex", paddingLeft: 1000 }}>
          <Link to="/">
            <img src={Logo} alt="Logo" height={150} />
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", paddingLeft: 290 }}>
        <img src={NoreLayanan8} alt="NoreLayanan8" height={162} width={162} />
        <div style={{ textAlign: "start", paddingLeft: 50 }}>
          <h1
            style={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "48px",
            }}
          >
            MINI PRIORITAS
          </h1>
          <div
            style={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "24px",
            }}
          >
            <li>Server dan domain</li>
            <li>Template website</li>
            <li>Garansi bug</li>
            <li>Optimasi mobile</li>
            <li>Additional Email: 200rb /email /tahun 500MB</li>
          </div>
        </div>
      </div>

      <div
        className="container1"
        style={{
          display: "flex",
          color: "#A5A5A5",
          fontFamily: "Poppins",
          fontSize: "26px",
          fontWeight: 600,
          paddingLeft: 75.21,
          paddingTop: 250,
        }}
      >
        <div>
          <p>Yang Anda butuhkan adalah:</p>
        </div>
        <div style={{ paddingLeft: 1300 }}>
          <p>Budget: </p>
        </div>
      </div>
      <div
        className="container1"
        style={{
          display: "flex",
          color: "#319f66",
          fontFamily: "Poppins",
          fontSize: "38px",
          fontWeight: 700,
          paddingLeft: 75.21,
        }}
      >
        <div style={{ width: "40%", textAlign: "start", marginTop: -10 }}>
          <p>PEMBUATAN WEBSITE LANGGANAN MINI PRIORITAS</p>
        </div>

        <div style={{ paddingLeft: 820, marginTop: -10 }}>
          <p>Rp3.000.000</p>
        </div>
      </div>
      <div>
        <div
          className="container7"
          style={{ position: "absolute", zIndex: -1 }}
        >
          <div style={{ paddingLeft: 600, marginTop: -170 }}>
            <img
              src={Gambar}
              alt="Gambar"
              height={400}
              width={499}
              height={409}
            />
          </div>
          <div style={{ paddingLeft: 300, marginTop: -190 }}>
            <img src={NonoRere11} alt="NonoRere11" width={480} height={480} />
          </div>
        </div>
        <div>
          <p
            style={{
              color: "#A5A5A5",
              fontFamily: "Poppins",
              fontSize: "26px",
              fontWeight: 600,
              paddingLeft: 1665,
            }}
          >
            Uang Muka:
          </p>
          <p
            style={{
              color: "#319f66",
              fontFamily: "Poppins",
              fontSize: "38px",
              fontWeight: 700,
              paddingLeft: 1620,
            }}
          >
            Rp900.000
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: "30px",
          paddingLeft: 75.21,
          paddingTop: 200,
        }}
      >
        <p>Silahkan isi Form untuk melanjutkan pemesanan</p>
      </div>
      <Form>
        <Form.Group
          className="mb-5"
          style={{
            display: "flex",
            fontFamily: "Roboto",
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          <Form.Label>Nama</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group
          className="mb-5"
          style={{
            display: "flex",
            fontFamily: "Roboto",
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          <Form.Label>Perusahaan/Instansi</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group
          className="mb-5"
          style={{
            display: "flex",
            fontFamily: "Roboto",
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          <Form.Label>Benchmark</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group
          className="mb-5"
          style={{
            display: "flex",
            fontFamily: "Roboto",
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          <Form.Label>Nama Domain</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group
          className="mb-5"
          style={{
            display: "flex",
            fontFamily: "Roboto",
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          <Form.Label>Keterangan</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group
          className="mb-5"
          style={{
            display: "flex",
            fontFamily: "Roboto",
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          <Form.Label>No. HP</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group
          className="mb-5"
          style={{
            display: "flex",
            fontFamily: "Roboto",
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          <Form.Label>Email</Form.Label>
          <Form.Control />
        </Form.Group>
        <Button style={{ background: "#39B772", color: "white" }}>Kirim</Button>
      </Form>
      <div className="footer" style={{ color: "white", marginTop: "23%" }}>
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

export default Miniprio;
