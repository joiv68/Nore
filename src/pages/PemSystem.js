import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Background6 } from "../assets/Background6.svg";
import Logo from "../image/Logo.png";
import System from "../image/System.png";
import NonoRere9 from "../image/NonoRere9.png";
import Comment from "../image/Comment.png";
import Inet from "../image/Inet.png";
import WA from "../image/WA.png";
import Message from "../image/Message.png";
import IG from "../image/IG.png";
import FB from "../image/FB.png";
import Kuning1 from "../image/Kuning1.png";

const PemSystem = () => {
  return (
    <div>
      <div
        className="Background6"
        style={{ position: "absolute", top: 0, zIndex: -1, display: "flex" }}
      >
        <Background6 />
      </div>
      <div className="container1">
        <div
          style={{
            display: "flex",
            paddingLeft: 75.21,
            paddingTop: 20,
            fontSize: "24px",
            fontFamily: "Poppins",
          }}
        >
          <Link to="/Sudah">
            <p style={{ color: "white" }}> {`< Kembali`}</p>
          </Link>
        </div>
        <div style={{ display: "flex", paddingLeft: 300 }}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", paddingLeft: 70 }}>
        <img src={System} alt="System" height={175} />
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: "48px",
            color: "white",
            width: "50%",
            textAlign: "start",
            marginTop: 0,
            paddingLeft: 40,
          }}
        >
          Pembuatan Sistem Informasi Berbasis Website, Android/IOS
        </p>
      </div>
      <div className="contpemsys" style={{ position: "absolute", zIndex: -1 }}>
        <div style={{ display: "flex", paddingTop: 170, paddingLeft: 20 }}>
          <img src={NonoRere9} alt="NonoRere9" height={401} />
        </div>
        <div style={{ paddingTop: 100 }}>
          <img src={Comment} alt="Comment" height={330} />
        </div>
      </div>
      <div>
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "35px",
            width: "50%",
            color: "#319F66",
            paddingLeft: 560,
            paddingTop: 120,
          }}
        >
          Halo. Apa kamu sudah paham tentang layanan pembuatan Sistem Informasi?
        </p>
        <div style={{ paddingLeft: 1300, paddingTop: 120 }}>
          <img src={Kuning1} alt="Kuning1" />
        </div>
      </div>
      <div>
        <a
          style={{
            width: "9%",
            fontFamily: "Poppins",
            fontWeight: 600,
            padding: 15,
            color: "white",
            position: "absolute",
            left: 760,
            top: 660,
            boxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
            WebkitBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
            MozBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
            borderRadius: "35px 35px 35px 35px",
            border: "2px solid #319f66",
            background: "#319f66",
          }}
        >
          Belum
        </a>
      </div>
      <div>
        <p
          style={{
            width: "9%",
            fontFamily: "Poppins",
            fontWeight: 600,
            padding: 15,
            color: "#319f66",
            position: "absolute",
            zIndex: 1,
            left: 1080,
            top: 645,
            boxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
            WebkitBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
            MozBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
            borderRadius: "35px 35px 35px 35px",
            border: "2px solid #319f66",
          }}
        >
          Sudah
        </p>
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

export default PemSystem;
