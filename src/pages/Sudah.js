import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../image/Logo2.png";
import Comment1 from "../image/Comment1.png";
import Inet from "../image/Inet.png";
import WA from "../image/WA.png";
import Message from "../image/Message.png";
import IG from "../image/IG.png";
import FB from "../image/FB.png";
import Logo from "../image/Logo.png";

const Sudah = () => {
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
          <Link to="/PemWeb">
            <p style={{ color: "#319f66" }}> {`< Kembali`}</p>
          </Link>
        </div>
        <div style={{ display: "flex", paddingLeft: 230 }}>
          <Link to="/">
            <img src={Logo2} alt="Logo2" height={150} />
          </Link>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: -1,
          paddingLeft: 427,
          paddingTop: 230,
        }}
      >
        <img src={Comment1} alt="Comment1" />
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "40px",
          color: "#319f66",
          paddingTop: 290,
        }}
      >
        <p>Mau berlangganan atau mau beli website</p>
      </div>
      <div>
        <Link to="/PemWeb3">
          <a
            style={{
              width: "9%",
              fontFamily: "Poppins",
              fontWeight: 600,
              padding: 15,
              color: "white",
              position: "absolute",
              left: 690,
              top: 590,
              boxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
              WebkitBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
              MozBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
              borderRadius: "35px 35px 35px 35px",
              border: "2px solid #319f66",
              background: "#319f66",
            }}
          >
            Langganan
          </a>
        </Link>
      </div>
      <div>
        <Link to="/WebLepas">
          <p
            style={{
              width: "9%",
              fontFamily: "Poppins",
              fontWeight: 600,
              padding: 15,
              color: "#319f66",
              position: "absolute",
              zIndex: 1,
              left: 1050,
              top: 572,
              boxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
              WebkitBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
              MozBoxShadow: "-1px 4px 5px 3px rgba(0,0,0,0.38)",
              borderRadius: "35px 35px 35px 35px",
              border: "2px solid #319f66",
            }}
          >
            Lepas
          </p>
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
          Nore Inovasi ?? 2021.All right reserved
        </p>
      </div>
    </div>
  );
};

export default Sudah;
