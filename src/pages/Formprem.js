import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Background7 } from "../assets/Background7.svg";
import Logo from "../image/Logo.png";
import SI2 from "../image/SI2.png";
import Inet from "../image/Inet.png";
import WA from "../image/WA.png";
import Message from "../image/Message.png";
import IG from "../image/IG.png";
import FB from "../image/FB.png";
import NonoRere11 from "../image/NonoRere11.png";

const Formprem = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <div
        style={{ position: "absolute", top: 0, zIndex: -1, display: "flex" }}
      >
        <Background7 />
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
          <Link to="/">
            <p style={{ color: "white" }}> {`< Kembali`}</p>
          </Link>
        </div>
        <div
          style={{ display: "flex", justifyContent: "end", alignItems: "end" }}
        >
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="container8" style={{ display: "flex" }}>
        <div style={{ paddingLeft: 75 }}>
          <img src={SI2} alt="SI2" width={433} height={264} />
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Poppins",
            textAlign: "start",
            fontWeight: 700,
            fontSize: "48px",
            width: "35%",
            color: "#ffffff",
            alignItems: "center",
          }}
        >
          <p>FORM PEMBUATAN SISTEM INFORMASI (PREMIUM)</p>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "end", alignItems: "end" }}
      >
        <img src={NonoRere11} alt="NonoRere11" width={255} height={255} />
      </div>
      <div
        style={{
          paddingLeft: 75.21,
          fontFamily: "Roboto",
          fontSize: "20px",
          fontWeight: 400,
          paddingTop: 50,
        }}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group
            className="mb-5"
            controlId="validationCustom01"
            style={{
              display: "flex",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "start",
              paddingTop: 10,
            }}
          >
            <Form.Label column sm="2">
              Nama
            </Form.Label>
            <Form.Control type="text" required placeholder="contoh: Mark" />
            <Form.Control.Feedback type="invalid">
              Kolom wajib diisi!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-5"
            controlId="validationCustom01"
            style={{
              display: "flex",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "start",
            }}
          >
            <Form.Label column sm="2">
              Nama Perusahaan/Instansi
            </Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="contoh: CV. More Inovasi"
            />
            <Form.Control.Feedback type="invalid">
              Kolom wajib diisi!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-5"
            controlId="validationCustom01"
            style={{
              display: "flex",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "start",
            }}
          >
            <Form.Label column sm="2">
              No. Hp
            </Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="contoh: 08123456789"
            />
            <Form.Control.Feedback type="invalid">
              Kolom wajib diisi!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-5"
            controlId="validationCustom01"
            style={{
              display: "flex",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "start",
            }}
          >
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="contoh: mark@example.com"
            />
            <Form.Control.Feedback type="invalid">
              Kolom wajib diisi!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-5"
            controlId="validationCustom04"
            style={{
              display: "flex",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "start",
            }}
          >
            <Form.Label column sm="2">
              Keterangan Kebutuhan
            </Form.Label>
            <Form.Control
              type="text"
              required
              as="textarea"
              rows={5}
              placeholder="contoh: Warna dasar biru, button dibuat lebih mencolok"
            />
            <Form.Control.Feedback type="invalid">
              Kolom wajib diisi!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-5"
            style={{
              display: "flex",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "start",
            }}
          >
            <Form.Label column sm="2">
              Range Budget
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Silahkan Pilih -</option>
              <option value="1">10jt - 50jt</option>
              <option value="2">50jt - 200jt</option>
              <option value="3">200jt - 500jt</option>
              <option value="4">500jt - 1M</option>
              <option value="5">1M++</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-5"
            style={{
              display: "flex",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "start",
            }}
          >
            <Form.Label column sm="2">
              Jenis Layanan
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Silahkan Pilih -</option>
              <option value="1">Langganan</option>
              <option value="2">Lepas</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-5"
            style={{
              display: "flex",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "start",
            }}
          >
            <Form.Label column sm="2">
              Jenis Desain
            </Form.Label>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Website"
                  name="Website"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Android"
                  name="Android"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="iOS"
                  name="iOS"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form.Group>
          <Form.Group
            className="mb-5"
            style={{
              display: "flex",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "start",
            }}
          >
            <Form.Label column sm="2">
              Jenis Meeting
            </Form.Label>
          </Form.Group>
          <Button
            style={{
              background: "#39B772",
              color: "white",
              justifyItems: "end",
              textAlign: "start",
            }}
            type="submit"
          >
            Kirim
          </Button>
        </Form>
      </div>
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
            <div className="row" style={{ display: "flex" }}>
              <div style={{ width: "30%" }}>
                <h1 style={{ fontFamily: "poppins", fontSize: "24px" }}>
                  PROFIL
                </h1>
                <div
                  style={{
                    alignItems: "center",
                  }}
                >
                  <img src={Inet} alt="Inet" />
                  <p
                    style={{
                      fontFamily: "poppins",
                      fontSize: "18px",
                      paddingLeft: "5px",
                      alignItems: "center",
                    }}
                  >
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
                    cs@nore.web.id
                  </p>
                </div>
              </div>
              <div style={{ width: "27%" }}>
                <h1 style={{ fontFamily: "poppins", fontSize: "24px" }}>
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

export default Formprem;
