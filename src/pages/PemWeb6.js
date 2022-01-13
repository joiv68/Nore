import React from "react";
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
import Select from "react-select";

const options = [
  { label: "Perusahaan 1", value: "Perusahaan1" },
  { label: "Perusahaan 2", value: "Perusahaan1" },
  { label: "Perusahaan 3", value: "Perusahaan1" },
  { label: "Perusahaan 4", value: "Perusahaan1" },
  { label: "Perusahaan 5", value: "Perusahaan1" },
];

const PemWeb6 = () => {
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
        <div style={{ display: "flex", paddingLeft: 200 }}>
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
        <div style={{ width: "45%", textAlign: "start", marginTop: -10 }}>
          <p>PEMBUATANA WEBSITE LANGGANAN SIMPEL</p>
        </div>

        <div style={{ paddingLeft: 725, marginTop: -10 }}>
          <p>Rp2.000.000</p>
        </div>
      </div>
      <div>
        <div
          className="container7"
          style={{ position: "absolute", zIndex: -1 }}
        >
          <div style={{ paddingLeft: 650, marginTop: -260 }}>
            <img src={Gambar} alt="Gambar" height={400} />
          </div>
          <div style={{ paddingLeft: 432, marginTop: -160 }}>
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
          paddingTop: 100,
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
        }}
      >
        <div className="container8" style={{ textAlign: "start" }}>
          <div>
            <label>Jenis Desain</label>
          </div>
          <div>
            <Select options={options} placeholder="--Silakan dipilih--" />
          </div>
        </div>
        <div
          className="container8"
          style={{ textAlign: "start", paddingTop: 60 }}
        >
          <div>
            <label>Nama</label>
          </div>
          <input
            type="text"
            required
            placeholder="contoh: Mark"
            style={{ padding: 10, color: "#B8B8B8" }}
          />
        </div>
        <div
          className="container8"
          style={{ textAlign: "start", paddingTop: 60 }}
        >
          <div>
            <label>Perusahaan/Instansi</label>
          </div>
          <input
            type="text"
            required
            placeholder="contoh: CV.Nore Inovasi/Personal"
            style={{ padding: 10, color: "#B8B8B8" }}
          />
        </div>
        <div
          className="container8"
          style={{ textAlign: "start", paddingTop: 60 }}
        >
          <div>
            <label>Nama Domain</label>
          </div>
          <input
            type="text"
            required
            placeholder="contoh: nore.web.id"
            style={{ padding: 10, color: "#B8B8B8" }}
          />
        </div>
        <div
          className="container8"
          style={{ textAlign: "start", paddingTop: 60 }}
        >
          <div>
            <label>Keterangan</label>
          </div>
          <input
            type="text"
            required
            placeholder="contoh: Warna dasar biru"
            style={{ padding: 60, color: "#B8B8B8" }}
          />
        </div>
        <div
          className="container8"
          style={{ textAlign: "start", paddingTop: 60 }}
        >
          <div>
            <label>No. HP</label>
          </div>
          <input
            type="text"
            required
            placeholder="contoh: 081234567890"
            style={{ padding: 10, color: "#B8B8B8" }}
          />
        </div>
        <div
          className="container8"
          style={{ textAlign: "start", paddingTop: 60 }}
        >
          <div>
            <label>Email</label>
          </div>
          <input
            type="text"
            required
            placeholder="contoh: mark@example.com"
            style={{ padding: 10, color: "#B8B8B8" }}
          />
        </div>
      </div>
      <div style={{ paddingLeft: 1700, paddingTop: 60 }}>
        <a
          style={{
            width: "25%",
            fontFamily: "Poppins",
            fontWeight: 600,
            padding: 13,
            color: "white",
            display: "flex",
            paddingLeft: 40,
            paddingRight: 80,
            paddingTop: 10,
            boxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
            WebkitBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
            MozBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
            borderRadius: "35px 35px 35px 35px",
            border: "1px solid #319f66",
            background: "#319f66",
          }}
        >
          Kirim
        </a>
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

export default PemWeb6;
