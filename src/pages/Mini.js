import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../image/Logo2.png";
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
import NoreLayanan6 from "../image/NoreLayanan6.png";
import NoreLayanan7 from "../image/NoreLayanan7.png";
import Rereteks from "../image/Rereteks.png";
import NonoRere3 from "../image/NonoRere3.png";

const Mini = () => {
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
          <Link to="/PemWeb3">
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
        style={{
          color: "#319f66",
          textAlign: "center",
          width: "70%",
          fontFamily: "Poppins",
          fontSize: "48px",
          fontWeight: 700,
          paddingLeft: 322,
        }}
      >
        <p>WEBSITE LANGGANAN MINI SEPERTI APA YANG ANDA INGINKAN?</p>
      </div>
      <div style={{ position: "fixed", display: "flex", right: 0, top: "50%" }}>
        <img src={Rereteks} alt="Rereteks" />
      </div>
      <div
        className="Container3"
        style={{
          justifyItems: "center",
          justifyContent: "center",
          paddingTop: 80,
        }}
      >
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
            <img src={NoreLayanan6} alt="NoreLayanan6" />
            <h1>MINI SIMPEL</h1>
          </div>
          <div style={{ paddingLeft: 310 }}>
            <div
              style={{
                width: "12%",
                display: "flex",
                flexDirection: "column",
                MozBoxShadow: "27px 27px 27px 27px",
                borderRadius: "27px 27px 27px 27px",
                border: "3px solid #319f66",
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
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
                  1,2jt
                </h1>
              </div>
              <div style={{ color: "#319f66" }}>
                <p>tahun pertama</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: 1000 }}>
          <div
            style={{
              width: "13%",
              display: "flex",
              flexDirection: "column",
              MozBoxShadow: "27px 27px 27px 27px",
              borderRadius: "27px 27px 27px 27px",
              border: "3px solid #319f66",
              position: "absolute",
              marginTop: -140,
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p
                style={{
                  paddingLeft: 40,
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
                600rb
              </h1>
            </div>
            <div style={{ color: "#319f66" }}>
              <p>tahun pertama</p>
            </div>
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
        <li>Template website</li>
        <li>Garansi bug</li>
        <li>Optimasi mobile</li>
        <li>Additional Email: 200rb /email /tahun 500MB</li>
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
      </div>
      <div style={{ paddingLeft: 950, paddingTop: 30 }}>
        <Link to="PemWeb5">
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
        </Link>
      </div>
      <div>
        <div
          className="container1"
          style={{ paddingLeft: 490, paddingTop: 50, zIndex: 1 }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: -1,
              left: 0,
              top: 0,
              paddingTop: 1060,
              paddingLeft: 359,
            }}
          >
            <img src={NonoRere3} alt="NonoRere3" height={235} />
          </div>
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
            <img src={NoreLayanan7} alt="NoreLayanan7" />
            <h1>MINI PRIORITAS</h1>
          </div>
        </div>
        <div style={{ paddingLeft: 795 }}>
          <div
            style={{
              width: "12%",
              display: "flex",
              flexDirection: "column",
              MozBoxShadow: "27px 27px 27px 27px",
              borderRadius: "27px 27px 27px 27px",
              border: "3px solid #319f66",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
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
                3jt
              </h1>
            </div>
            <div style={{ color: "#319f66" }}>
              <p>tahun pertama</p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: 1000 }}>
          <div
            style={{
              width: "13%",
              display: "flex",
              flexDirection: "column",
              MozBoxShadow: "27px 27px 27px 27px",
              borderRadius: "27px 27px 27px 27px",
              border: "3px solid #319f66",
              position: "absolute",
              marginTop: -140,
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p
                style={{
                  paddingLeft: 40,
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
                1,5jt
              </h1>
            </div>
            <div style={{ color: "#319f66" }}>
              <p>tahun pertama</p>
            </div>
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
        <li>Template website</li>
        <li>Garansi bug</li>
        <li>Optimasi mobile</li>
        <li>Additional Email: 200rb /email /tahun 500MB</li>
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
      <div style={{ paddingLeft: 950, paddingTop: 30 }}>
        <Link to="PemWeb6">
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
        </Link>
      </div>
    </div>
  );
};

export default Mini;
