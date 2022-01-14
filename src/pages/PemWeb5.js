import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/Logo.png";
import { ReactComponent as Background4 } from "../assets/Background4.svg";
import NoreLayanan3 from "../image/NoreLayanan3.png";
import NonoRere5 from "../image/NonoRere5.png";
import Ikon1 from "../image/Ikon1.png";
import Contoh1 from "../image/Contoh1.png";
import Contoh2 from "../image/Contoh2.png";
import Contoh3 from "../image/Contoh3.png";
import Contoh4 from "../image/Contoh4.png";
import Contoh5 from "../image/Contoh5.png";
import NonoRere1 from "../image/NonoRere1.png";
import Inet from "../image/Inet.png";
import WA from "../image/WA.png";
import Message from "../image/Message.png";
import IG from "../image/IG.png";
import FB from "../image/FB.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import Pendidikan from "../image/Pendidikan.png";
import Pend1 from "../image/Pend1.png";
import Pend2 from "../image/Pend2.png";
import Pend3 from "../image/Pend3.png";
import Pend4 from "../image/Pend4.png";
import Pend5 from "../image/Pend5.png";
import Olshop from "../image/Olshop.png";
import Olshop1 from "../image/Olshop1.png";
import Olshop2 from "../image/Olshop2.png";
import Olshop3 from "../image/Olshop3.png";
import Olshop4 from "../image/Olshop4.png";
import Olshop5 from "../image/Olshop5.png";
import Kafe from "../image/Kafe.png";
import Kafe1 from "../image/Kafe1.png";
import Kafe2 from "../image/Kafe2.png";
import Kafe3 from "../image/Kafe3.png";
import Kafe4 from "../image/Kafe4.png";
import Kafe5 from "../image/Kafe5.png";
import Event from "../image/Event.png";
import Event1 from "../image/Event1.png";
import Event2 from "../image/Event2.png";
import Event3 from "../image/Event3.png";
import Event4 from "../image/Event4.png";
import Event5 from "../image/Event5.png";
import Personal from "../image/Personal.png";
import Personal1 from "../image/Personal1.png";
import Personal2 from "../image/Personal2.png";
import Personal3 from "../image/Personal3.png";
import Personal4 from "../image/Personal4.png";
import Personal5 from "../image/Personal5.png";

const PemWeb5 = () => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const settings1 = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div
        className="Background4"
        style={{ position: "absolute", top: 0, zIndex: -1, display: "flex" }}
      >
        <Background4 />
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
          <Link to="/PemWeb4">
            <p style={{ color: "white" }}> {`< Kembali`}</p>
          </Link>
        </div>
        <div style={{ display: "flex", paddingLeft: 300 }}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", paddingLeft: 290, marginTop: -60 }}>
        <img src={NoreLayanan3} alt="NoreLayanan3" height={162} />
        <div style={{ textAlign: "start", paddingLeft: 50 }}>
          <h1
            style={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "48px",
            }}
          >
            SIMPEL
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
            <li>Pengoperasian website 30x /tahun</li>
            <li>Email perusahaan (limit 1 email, 300MB /email)</li>
          </div>
        </div>
        <div style={{ paddingTop: 130, paddingLeft: 230 }}>
          <img src={NonoRere5} alt="NonoRere5" height={200} />
        </div>
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: "48px",
          color: "#319f66",
          paddingTop: 90,
        }}
      >
        <p>JENIS DESAIN UNTUK ANDA</p>
      </div>
      <div
        className="NonoRere1"
        style={{
          position: "fixed",
          left: 0,
          top: "50%",
          bottom: "50%",
          zIndex: 2,
        }}
      >
        <img src={NonoRere1} alt="nonorere1" />
      </div>
      <div className="container5">
        <div style={{ paddingLeft: 370, paddingTop: 35 }}>
          <img src={Ikon1} alt="Ikon1" height={110} />
        </div>
        <div>
          <h1
            style={{
              textAlign: "left",
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "24px",
              paddingTop: 30,
            }}
          >
            PERUSAHAAN
          </h1>
          <p
            style={{
              textAlign: "left",
              width: "100%",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 400,
              color: "#717171",
              paddingTop: 20,
            }}
          >
            Tersedia berbagai macam desain website untuk perusahaan marketing,
            bengkel, mebel, food product, dan sebagainya. Berikut kami sajikan
            beberapa desain terbaik kami.
          </p>
        </div>
      </div>
      <div
        className="contslide"
        style={{
          fontFamily: "Poppins",
          fontWeight: "bold",
          alignItems: "center",
        }}
      >
        <Slider {...settings}>
          <div style={{ textAlign: "center" }}>
            <p>PERUSAHAAN 1</p>
            <img src={Contoh1} alt="Contoh1" width="100%" height={315} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link to="/PemWeb6">
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
              </Link>
              <Button
                style={{
                  backgroundColor: "#FBFBFB",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "1px solid #272727",
                }}
              >
                Lihat
              </Button>
            </div>
          </div>
          <div>
            <p>PERUSAHAAN 2</p>
            <img src={Contoh2} alt="Contoh2" width="100%" height={315} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link to="/PemWeb6">
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
              </Link>
              <Button
                style={{
                  backgroundColor: "#FBFBFB",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "1px solid #272727",
                }}
              >
                Lihat
              </Button>
            </div>
          </div>
          <div>
            <p style={{ paddingRight: 60 }}>PERUSAHAAN 3</p>
            <img src={Contoh3} alt="Contoh3" width="100%" height={315} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link to="/PemWeb6">
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
              </Link>
              <Button
                style={{
                  backgroundColor: "#FBFBFB",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "1px solid #272727",
                }}
              >
                Lihat
              </Button>
            </div>
          </div>
          <div>
            <p style={{ paddingRight: 40 }}>PERUSAHAAN 4</p>
            <img src={Contoh4} alt="Contoh4" width="100%" height={315} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link to="/PemWeb6">
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
              </Link>
              <Button
                style={{
                  backgroundColor: "#FBFBFB",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "1px solid #272727",
                }}
              >
                Lihat
              </Button>
            </div>
          </div>
          <div>
            <p style={{ paddingRight: 70 }}>PERUSAHAAN 5</p>
            <img src={Contoh5} alt="Contoh5" width="100%" height={315} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link to="/PemWeb6">
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
              </Link>
              <Button
                style={{
                  backgroundColor: "#FBFBFB",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "1px solid #272727",
                }}
              >
                Lihat
              </Button>
            </div>
          </div>
        </Slider>
      </div>
      <div>
        <Link to="/PemWeb6">
          <Button
            style={{
              backgroundColor: "#BABABA",
              fontWeight: "bold",
              color: "#272727",
              borderRadius: 20,
              justifyContent: "center",
            }}
          >
            Lainnya
          </Button>
        </Link>
        <p>Langsung Isi Form</p>
      </div>
      <div className="container5">
        <div style={{ paddingLeft: 370, paddingTop: 35 }}>
          <img src={Pendidikan} alt="Pendidikan" height={110} />
        </div>
        <div>
          <h1
            style={{
              textAlign: "left",
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "24px",
              paddingTop: 30,
            }}
          >
            PENDIDIKAN
          </h1>
          <p
            style={{
              textAlign: "left",
              width: "100%",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 400,
              color: "#717171",
              paddingTop: 20,
            }}
          >
            Tersedia berbagai macam desain website untuk sekolahan, universitas,
            kursus dan sebagainya. Berikut kami sajikan beberapa desain terbaik
            kami.
          </p>
        </div>
      </div>
      <div
        className="contslide2"
        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
      >
        <Slider {...settings1}>
          <div>
            <p style={{ paddingRight: 50 }}>PENDIDIKAN 1</p>
            <img src={Pend1} alt="Pend1" width="100%" height={315} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#FFE921",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "0px",
                }}
              >
                Pesan
              </Button>
              <Button
                style={{
                  backgroundColor: "#FBFBFB",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "1px solid #272727",
                }}
              >
                Lihat
              </Button>
            </div>
          </div>
          <div>
            <p style={{ paddingRight: 60 }}>PENDIDIKAN 2</p>
            <img src={Pend2} alt="Pend2" width="100%" height={315} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#FFE921",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "0px",
                }}
              >
                Pesan
              </Button>
              <Button
                style={{
                  backgroundColor: "#FBFBFB",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "1px solid #272727",
                }}
              >
                Lihat
              </Button>
            </div>
          </div>
          <div>
            <p style={{ paddingRight: 60 }}>PENDIDIKAN 3</p>
            <img src={Pend3} alt="Pend3" width="100%" height={315} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#FFE921",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "0px",
                }}
              >
                Pesan
              </Button>
              <Button
                style={{
                  backgroundColor: "#FBFBFB",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "1px solid #272727",
                }}
              >
                Lihat
              </Button>
            </div>
          </div>
          <div>
            <p style={{ paddingRight: 40 }}>PENDIDIKAN 4</p>
            <img src={Pend4} alt="Pend4" width="100%" height={315} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#FFE921",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "0px",
                }}
              >
                Pesan
              </Button>
              <Button
                style={{
                  backgroundColor: "#FBFBFB",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "1px solid #272727",
                }}
              >
                Lihat
              </Button>
            </div>
          </div>
          <div>
            <p style={{ paddingRight: 55 }}>PENDIDIKAN 5</p>
            <img src={Pend5} alt="Pend5" width="100%" height={315} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#FFE921",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "0px",
                }}
              >
                Pesan
              </Button>
              <Button
                style={{
                  backgroundColor: "#FBFBFB",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                  border: "1px solid #272727",
                }}
              >
                Lihat
              </Button>
            </div>
          </div>
        </Slider>
      </div>
      <Container>
        <Row>
          <Col md={{ span: 5, offset: 11 }}>
            <Button
              style={{
                backgroundColor: "#BABABA",
                fontWeight: "bold",
                color: "#272727",
                borderRadius: 20,
                justifyContent: "center",
              }}
            >
              Lainnya
            </Button>
          </Col>
        </Row>
        <Row style={{ fontWeight: "bold" }}>
          <Col md={{ span: 6, offset: 5 }}>Langsung Isi Form</Col>
        </Row>
      </Container>
      <div className="container5">
        <div style={{ paddingLeft: 370, paddingTop: 35 }}>
          <img src={Olshop} alt="Olshop" height={110} />
        </div>
        <div>
          <h1
            style={{
              textAlign: "left",
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "24px",
              paddingTop: 30,
            }}
          >
            TOKO ONLINE
          </h1>
          <p
            style={{
              textAlign: "left",
              width: "90%",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 400,
              color: "#717171",
              paddingTop: 20,
            }}
          >
            Tersedia berbagai macam desain website untuk bermacama-macam toko
            online. Berikut kami sajikan beberapa desain terbaik kami.
          </p>
        </div>
      </div>
      <div
        className="contslide1"
        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
      >
        <div>
          <Slider {...settings}>
            <div>
              <p style={{ paddingRight: 50 }}>TOKO ONLINE 1</p>
              <img src={Olshop1} alt="Olshop1" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 60 }}>TOKO ONLINE 2</p>
              <img src={Olshop2} alt="Olshop2" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 60 }}>TOKO ONLINE 3</p>
              <img src={Olshop3} alt="Olshop3" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 40 }}>TOKO ONLINE 4</p>
              <img src={Olshop4} alt="Olshop4" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 50 }}>TOKO ONLINE 5</p>
              <img src={Olshop5} alt="Olshop5" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={{ span: 5, offset: 11 }}>
            <Link to="/PemWeb6">
              <Button
                style={{
                  backgroundColor: "#BABABA",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                }}
              >
                Lainnya
              </Button>
            </Link>
          </Col>
        </Row>
        <Row style={{ fontWeight: "bold" }}>
          <Col md={{ span: 6, offset: 5 }}>Langsung Isi Form</Col>
        </Row>
      </Container>
      <div className="container5">
        <div style={{ paddingLeft: 370, paddingTop: 35 }}>
          <img src={Kafe} alt="Kafe" height={110} />
        </div>
        <div>
          <h1
            style={{
              textAlign: "left",
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "24px",
              paddingTop: 30,
            }}
          >
            KAFE & RESTORAN
          </h1>
          <p
            style={{
              textAlign: "left",
              width: "100%",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 400,
              color: "#717171",
              paddingTop: 20,
            }}
          >
            Tersedia berbagai macam desain website untuk berbagai jenis cafe dan
            restoran. Berikut kami sajikan beberapa desain terbaik kami.
          </p>
        </div>
      </div>
      <div
        className="contslide"
        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
      >
        <div>
          <Slider {...settings}>
            <div>
              <p style={{ paddingRight: 50 }}>KAFE 1</p>
              <img src={Kafe1} alt="Kafe1" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 60 }}>KAFE 2</p>
              <img src={Kafe2} alt="Kafe2" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 60 }}>KAFE 3</p>
              <img src={Kafe3} alt="Kafe3" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 40 }}>KAFE 4</p>
              <img src={Kafe4} alt="Kafe4" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 50 }}>KAFE 5</p>
              <img src={Kafe5} alt="Kafe5" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={{ span: 5, offset: 11 }}>
            <Link to="/PemWeb6">
              <Button
                style={{
                  backgroundColor: "#BABABA",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                }}
              >
                Lainnya
              </Button>
            </Link>
          </Col>
        </Row>
        <Row style={{ fontWeight: "bold" }}>
          <Col md={{ span: 6, offset: 5 }}>Langsung Isi Form</Col>
        </Row>
      </Container>
      <div className="container5">
        <div style={{ paddingLeft: 370, paddingTop: 35 }}>
          <img src={Event} alt="Event " height={110} />
        </div>
        <div>
          <h1
            style={{
              textAlign: "left",
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "24px",
              paddingTop: 30,
            }}
          >
            EVENT
          </h1>
          <p
            style={{
              textAlign: "left",
              width: "100%",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 400,
              color: "#717171",
              paddingTop: 20,
            }}
          >
            Tersedia berbagai macam desain website untuk acara tertentu seperti
            lomba, pentas seni, pameran dan sebagainya. Berikut kami sajikan
            beberapa desain terbaik kami.
          </p>
        </div>
      </div>
      <div
        className="contslide"
        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
      >
        <div>
          <Slider {...settings}>
            <div>
              <p style={{ paddingRight: 50 }}>EVENT 1</p>
              <img src={Event1} alt="Event1" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 60 }}>EVENT 2</p>
              <img src={Event2} alt="Event2" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 60 }}>EVENT 3</p>
              <img src={Event3} alt="Event3" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 40 }}>EVENT 4</p>
              <img src={Event4} alt="Event4" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 50 }}>EVENT 5</p>
              <img src={Event5} alt="Event5" width="100%" height={315} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={{ span: 5, offset: 11 }}>
            <Link to="/PemWeb6">
              <Button
                style={{
                  backgroundColor: "#BABABA",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                }}
              >
                Lainnya
              </Button>
            </Link>
          </Col>
        </Row>
        <Row style={{ fontWeight: "bold" }}>
          <Col md={{ span: 6, offset: 5 }}>Langsung Isi Form</Col>
        </Row>
      </Container>
      <div className="container5">
        <div style={{ paddingLeft: 370, paddingTop: 35 }}>
          <img src={Personal} alt="Personal " height={110} />
        </div>
        <div>
          <h1
            style={{
              textAlign: "left",
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "24px",
              paddingTop: 30,
            }}
          >
            PERSONAL
          </h1>
          <p
            style={{
              textAlign: "left",
              width: "100%",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: 400,
              color: "#717171",
              paddingTop: 20,
            }}
          >
            Tersedia berbagai macam desain website untuk blog pribadi dengan
            fitur posting harian dan semacamnya. Berikut kami sajikan beberapa
            desain terbaik kami.
          </p>
        </div>
      </div>
      <div
        className="contslide3"
        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
      >
        <div>
          <Slider {...settings}>
            <div>
              <p style={{ paddingRight: 50 }}>PERSONAL 1</p>
              <img src={Personal1} alt="Personal1" width="100%" height={377} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 60 }}>PERSONAL 2</p>
              <img src={Personal2} alt="Personal2" width="100%" height={377} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 60 }}>PERSONAL 3</p>
              <img src={Personal3} alt="Personal3" width="100%" height={377} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 40 }}>PERSONAL 4</p>
              <img src={Personal4} alt="Personal4" width="100%" height={377} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
            <div>
              <p style={{ paddingRight: 50 }}>PERSONAL 5</p>
              <img src={Personal5} alt="Personal5" width="100%" height={377} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFE921",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "0px",
                  }}
                >
                  Pesan
                </Button>
                <Button
                  style={{
                    backgroundColor: "#FBFBFB",
                    fontWeight: "bold",
                    color: "#272727",
                    borderRadius: 20,
                    justifyContent: "center",
                    border: "1px solid #272727",
                  }}
                >
                  Lihat
                </Button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={{ span: 5, offset: 11 }}>
            <Link to="/PemWeb6">
              <Button
                style={{
                  backgroundColor: "#BABABA",
                  fontWeight: "bold",
                  color: "#272727",
                  borderRadius: 20,
                  justifyContent: "center",
                }}
              >
                Lainnya
              </Button>
            </Link>
          </Col>
        </Row>
        <Row style={{ fontWeight: "bold" }}>
          <Col md={{ span: 6, offset: 5 }}>Langsung Isi Form</Col>
        </Row>
      </Container>
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

export default PemWeb5;
