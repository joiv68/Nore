import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo2 from "../image/Logo2.png";
import NonoRere6 from "../image/NonoRere6.png";
import Gambar from "../image/Gambar.png";
import Inet from "../image/Inet.png";
import WA from "../image/WA.png";
import Message from "../image/Message.png";
import IG from "../image/IG.png";
import FB from "../image/FB.png";
import Logo from "../image/Logo.png";
import { Button, Form } from "react-bootstrap";

const PemWeb6 = () => {
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
            <p style={{ color: "#319f66" }}> {`< Kembali`}</p>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link to="/">
            <img src={Logo2} alt="Logo2" height={150} />
          </Link>
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
          justifyContent: "space-between",
        }}
      >
        <div>
          <p>Yang Anda butuhkan adalah:</p>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
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
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "40%", textAlign: "start", marginTop: -10 }}>
          <p>PEMBUATAN WEBSITE LANGGANAN SIMPEL</p>
        </div>

        <div>
          <p>Rp2.000.000</p>
        </div>
      </div>
      <div>
        <div
          className="container7"
          style={{ position: "absolute", zIndex: -1 }}
        >
          <div style={{ paddingLeft: 650, marginTop: -170 }}>
            <img src={Gambar} alt="Gambar" height={400} />
          </div>
          <div style={{ paddingLeft: 370, marginTop: -70 }}>
            <img src={NonoRere6} alt="NonoRere6" />
          </div>
        </div>
        <div>
          <p
            style={{
              color: "#A5A5A5",
              fontFamily: "Poppins",
              fontSize: "26px",
              fontWeight: 600,
              textAlign: "end",
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
              textAlign: "end",
            }}
          >
            Rp500.000
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
            <Form.Select aria-label="Default select example">
              <option>Silahkan Pilih -</option>
              <option value="1">Perusahaan 1</option>
              <option value="2">Perusahaan 2</option>
              <option value="3">Perusahaan 3</option>
              <option value="4">Perusahaan 4</option>
              <option value="5">Perusahaan 5</option>
            </Form.Select>
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
              Nama
            </Form.Label>
            <Form.Control type="text" required placeholder="contoh: Mark" />
            <Form.Control.Feedback type="invalid">
              Kolom wajib diisi!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-5"
            controlId="validationCustom02"
            style={{
              display: "flex",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "start",
            }}
          >
            <Form.Label column sm="2">
              Perusahaan/Instansi
            </Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="contoh: CV.Nore Inovasi / Personal"
            />
            <Form.Control.Feedback type="invalid">
              Kolom wajib diisi!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-5"
            controlId="validationCustom03"
            style={{
              display: "flex",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "start",
            }}
          >
            <Form.Label column sm="2">
              Nama Domain
            </Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="contoh: nore.web.id"
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
              Keterangan
            </Form.Label>
            <Form.Control
              type="text"
              required
              as="textarea"
              rows={5}
              placeholder="contoh: Warna dasar biru"
            />
            <Form.Control.Feedback type="invalid">
              Kolom wajib diisi!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-5"
            controlId="validationCustom05"
            style={{
              display: "flex",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "start",
            }}
          >
            <Form.Label column sm="2">
              No. HP
            </Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="contoh: 081234567890"
            />
            <Form.Control.Feedback type="invalid">
              Kolom wajib diisi!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-5"
            controlId="validationCustom06"
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
          Nore Inovasi ?? 2021.All right reserved
        </p>
      </div>
    </div>
  );
};

export default PemWeb6;
