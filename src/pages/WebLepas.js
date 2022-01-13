import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Background5 } from "../assets/Background5.svg";
import Logo from "../image/Logo.png";
import LepasWeb from "../image/LepasWeb.png";
import NonoRere8 from "../image/NonoRere8.png";
import NoreLayanan4 from "../image/NoreLayanan4.png";
import NoreLayanan5 from "../image/NoreLayanan5.png";
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
import Inet from "../image/Inet.png";

const WebLepas = () => {
  return (
    <div>
      <div
        className="Background5"
        style={{ position: "absolute", top: 0, zIndex: -1, display: "flex" }}
      >
        <Background5 />
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
      <div style={{ display: "flex", paddingLeft: 281 }}>
        <img src={LepasWeb} alt="LepasWeb" />
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: "48px",
            color: "white",
            marginTop: -20,
          }}
        >
          WEBSITE LEPAS
        </p>
      </div>
      <div>
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "24px",
            width: "51%",
            textAlign: "start",
            color: "white",
            paddingLeft: 431,
            marginTop: -80,
          }}
        >
          Layanan kuhusus bagi Anda yang ingin membeli website dari NORE dan
          memilikinya secara penuh tanpa berlanggnan dan pengoperasian dari tim
          NORE
        </p>
      </div>
      <div style={{ display: "flex", paddingTop: 30 }}>
        <img src={NonoRere8} alt="NonoRere8" />
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: "48px",
          color: "#319f66",
        }}
      >
        <p>WEBSITE LEPAS SEPERTI APA YANG ANDA INGINKAN?</p>
      </div>
      <div style={{ paddingLeft: 467 }}>
        <div
          style={{
            paddingTop: 30,
            paddingBottom: 30,
            width: "15%",
            position: "absolute",
            fontFamily: "Poppins",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "11px 11px 11px 11px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.23)",
            WebkitBoxShadow: "0px 0px 10px 0px rgba(0,0,0,0.23)",
            MozBoxShadow: "0px 0px 10px 0px rgba(0,0,0,0.23)",
          }}
        >
          <img src={NoreLayanan4} alt="NoreLayanan4" />
          <h1>SIMPEL</h1>
        </div>
        <div style={{ paddingLeft: 310 }}>
          <div
            style={{
              width: "13%",
              display: "flex",
              MozBoxShadow: "27px 27px 27px 27px",
              borderRadius: "27px 27px 27px 27px",
              border: "3px solid #319f66",
            }}
          >
            <p
              style={{
                paddingLeft: 10,
                paddingBottom: 30,
                color: "#319f66",
                weight: 400,
                fontFamily: "Poppins",
                fontSize: "14px",
                alignSelf: "flex-end",
              }}
            >
              Rp
            </p>
            <h1
              style={{
                color: "#319f66",
                weight: 700,
                fontFamily: "Poppins",
                fontSize: "48px",
              }}
            >
              2,5jt
            </h1>
          </div>
          <div
            style={{
              textAlign: "start",
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "20px",
              color: "#999999",
              paddingTop: 40,
              paddingLeft: 20,
            }}
          >
            <li>Template website</li>
            <li>Optimasi mobile</li>
            <li>Bantuan instalasi</li>
            <li>*Perubahan atau perbaikan dikenakan biaya tambahan</li>
          </div>
        </div>
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
      <div className="container4">
        <div style={{ paddingLeft: 500 }}>
          <img src={Klien} alt="Klien" height={61} />
        </div>
        <div style={{ paddingLeft: 480 }}>
          <img
            src={Klien1}
            alt="Klien1"
            height={61}
            style={{ backgroundColor: "#A5B3C1" }}
          />
        </div>
        <div style={{ paddingLeft: 480 }}>
          <img src={Klien2} alt="Klien2" height={61} />
        </div>
        <div style={{ paddingLeft: 510 }}>
          <img src={Klien3} alt="Klien3" height={61} />
        </div>
        <div style={{ paddingLeft: 430 }}>
          <img src={Klien4} alt="Klien4" height={61} />
        </div>
      </div>
      <div
        className="container4"
        style={{ paddingLeft: 490, fontFamily: "Poppins" }}
      >
        <div>
          <p> jsmobil.com</p>
        </div>
        <div>
          <p style={{ paddingLeft: 65 }}>cleanandcool.id</p>
        </div>
        <div>
          <p style={{ paddingLeft: 135 }}>surgapet.com</p>
        </div>
        <div>
          <p style={{ paddingLeft: 150 }}>woodsluck.id</p>
        </div>
        <div>
          <p style={{ paddingLeft: 180, width: "100%" }}>bactakleen-id.com</p>
        </div>
        <div style={{ paddingLeft: 950, paddingTop: 30 }}>
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
        </div>
      </div>
      <div>
        <div style={{ paddingLeft: 490, paddingTop: 50, zIndex: 1 }}>
          <div
            style={{
              paddingTop: 30,
              paddingBottom: 30,
              width: "15%",
              position: "absolute",
              fontFamily: "Poppins",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: "11px 11px 11px 11px",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.23)",
              WebkitBoxShadow: "0px 0px 10px 0px rgba(0,0,0,0.23)",
              MozBoxShadow: "0px 0px 10px 0px rgba(0,0,0,0.23)",
            }}
          >
            <img src={NoreLayanan5} alt="NoreLayanan5" />
            <h1>PRIORITAS</h1>
          </div>
        </div>
        <div style={{ paddingLeft: 795 }}>
          <div
            style={{
              width: "13%",
              display: "flex",
              MozBoxShadow: "27px 27px 27px 27px",
              borderRadius: "27px 27px 27px 27px",
              border: "3px solid #319f66",
            }}
          >
            <p
              style={{
                paddingLeft: 10,
                paddingBottom: 30,
                color: "#319f66",
                weight: 400,
                fontFamily: "Poppins",
                fontSize: "14px",
                alignSelf: "flex-end",
              }}
            >
              Rp
            </p>
            <h1
              style={{
                color: "#319f66",
                weight: 700,
                fontFamily: "Poppins",
                fontSize: "48px",
              }}
            >
              5jt
            </h1>
            <p
              style={{
                color: "#319f66",
                paddingBottom: 30,
                weight: 400,
                fontFamily: "Poppins",
                fontSize: "14px",
                alignSelf: "flex-end",
              }}
            >
              /tahun
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "start",
          paddingLeft: 815,
          color: "#999999",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: 400,
          paddingTop: 20,
        }}
      >
        <li>Server dan domain</li>
        <li>Website custom</li>
        <li>Garansi bug</li>
        <li>Optimasi mobile</li>
        <li>Pengoperasian website 100x/tahun</li>
        <li>Email perusahaan (limit 5 email, 500MB /email</li>
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
      <div className="container4">
        <div style={{ paddingLeft: 490 }}>
          <img src={Klien5} alt="Klien5" height={61} />
        </div>
        <div style={{ paddingLeft: 520 }}>
          <img
            src={Klien6}
            alt="Klien6"
            height={61}
            style={{ backgroundColor: "#A5B3C1" }}
          />
        </div>
        <div style={{ paddingLeft: 480 }}>
          <img src={Klien7} alt="Klien7" height={61} />
        </div>
        <div style={{ paddingLeft: 520 }}>
          <img src={Klien8} alt="Klien8" height={61} />
        </div>
        <div style={{ paddingLeft: 520 }}>
          <img src={Klien9} alt="Klien9" height={61} />
        </div>
      </div>
      <div className="container4" style={{ paddingLeft: 520 }}>
        <div>
          <p> antaralogistic.com</p>
        </div>
        <div>
          <p style={{ paddingLeft: 58 }}>muliaservice.id</p>
        </div>
        <div>
          <p style={{ paddingLeft: 120 }}>sanori.co.id</p>
        </div>
        <div>
          <p style={{ paddingLeft: 110 }}>twinbrotherfood.com</p>
        </div>
        <div>
          <p style={{ paddingLeft: 160, width: "100%" }}>kamalamuliajaya.com</p>
        </div>
      </div>
      <div style={{ paddingLeft: 1100, paddingTop: 30 }}>
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

export default WebLepas;
