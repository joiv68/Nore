import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Background2 } from "../assets/Background2.svg";
import Web2 from "../image/Web2.png";
import Logo from "../image/Logo.png";
import NonoRere2 from "../image/NonoRere2.png";
import Comment from "../image/Comment.png";
import Kuning from "../image/Kuning.png";
import Inet from "../image/Inet.png";
import WA from "../image/WA.png";
import Message from "../image/Message.png";
import IG from "../image/IG.png";
import FB from "../image/FB.png";
import "../assets/font.css";

function PemWeb() {
  return (
    <div>
      <div
        className="Background2"
        style={{ position: "absolute", top: 0, zIndex: -1, display: "flex" }}
      >
        <Background2 />
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
        <div style={{ display: "flex", paddingLeft: 300 }}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div style={{ display: " flex", paddingLeft: 75, alignItems: "center" }}>
        <img src={Web2} alt="Web2" />
        <h1
          style={{
            fontFamily: "poppins",
            fontSize: "48px",
            color: "white",
            paddingLeft: 25,
          }}
        >
          Pembuatan Website
        </h1>
      </div>
      <div style={{ display: "flex", paddingLeft: 1355 }}>
        <img src={Kuning} alt="Kuning" />
      </div>
      <div className="container1" style={{ display: "flex" }}>
        <div style={{ paddingLeft: 119, paddingTop: 15 }}>
          <img src={NonoRere2} alt="NonoRere2" />
        </div>
        <div style={{ position: "absolute", zIndex: 1, left: 350 }}>
          <img src={Comment} alt="Comment" height={300} />
          <h1
            style={{
              width: "80%",
              fontWeight: 600,
              position: "absolute",
              left: 157,
              top: 40,
              fontSize: "40px",
              fontFamily: "Poppins",
              color: "#319f66",
            }}
          >
            Apa kamu sudah punya server dan mau mengelola website-mu sendiri?
          </h1>
          <div>
            <Link to="/PemWeb2">
              <a
                style={{
                  width: "9%",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  padding: 15,
                  paddingLeft: 50,
                  paddingRight: 100,
                  color: "white",
                  position: "absolute",
                  left: 350,
                  top: 180,
                  boxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
                  WebkitBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
                  MozBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
                  borderRadius: "35px 35px 35px 35px",
                  border: "3px solid #319f66",
                  background: "#319f66",
                }}
              >
                Belum
              </a>
            </Link>
          </div>
          <div>
            <Link to="/Sudah">
              <p
                style={{
                  width: "9%",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  padding: 15,
                  color: "#319f66",
                  position: "absolute",
                  zIndex: 1,
                  left: 670,
                  top: 180,
                  paddingLeft: 50,
                  paddingRight: 100,
                  boxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
                  WebkitBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
                  MozBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
                  borderRadius: "35px 35px 35px 35px",
                  border: "3px solid #319f66",
                }}
              >
                Sudah
              </p>
            </Link>
          </div>
        </div>
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
}

export default PemWeb;
