import Logo from "../image/Logo.png";
import NonoRere from "../image/NonoRere.png";
import NonoRere1 from "../image/NonoRere1.png";
import Web from "../image/Web.png";
import SI from "../image/SI.png";
import Marketing from "../image/Marketing.png";
import Inet from "../image/Inet.png";
import WA from "../image/WA.png";
import Message from "../image/Message.png";
import IG from "../image/IG.png";
import FB from "../image/FB.png";
import "../assets/font.css";
import { ReactComponent as Background } from "../assets/Background.svg";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div
        style={{ position: "absolute", top: 0, zIndex: -1, display: "flex" }}
      >
        <Background />
      </div>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: "50%",
          bottom: "50%",
          zIndex: 1,
        }}
      >
        <img src={NonoRere1} alt="nonorere1" />
      </div>
      <div style={{ alignItems: "center" }}>
        <img src={Logo} alt="logo" />
        <h1
          style={{
            color: "white",
            fontSize: "48px",
            fontFamily: "Poppins",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 90,
            fontWeight: "bold",
          }}
        >
          Konsultasi dengan Nono dan Rere, Yuk!
        </h1>
        <div
          style={{
            color: "white",
            fontSize: "24px",
            fontFamily: "Poppins",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 40,
          }}
        >
          <p style={{ fontWeight: 400, width: "40%" }}>
            Untuk memudahkan proses pemesanan Anda, Nore menyediakan laman
            khusus untuk membantu Anda menemukan apa yang Anda butuhkan seputar
            IT
          </p>
        </div>
        <img src={NonoRere} alt="NonoRere" />
        <h1
          style={{
            color: "#319F66",
            fontSize: "48px",
            fontFamily: "Poppins",
            padding: 110,
          }}
        >
          APA YANG ANDA BUTUHKAN?
        </h1>
        <div className="container" style={{ justifyContent: "space-between" }}>
          <Link to="/PemWeb" style={{ textDecoration: "none" }}>
            <Card
              style={{ width: "27em", alignItems: "center", paddingTop: 50 }}
            >
              <img src={Web} alt="web" height={175} width={175} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: "32px",
                    alignItems: "center",
                    color: "#3F3F3F",
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}
                >
                  Pembuatan Website
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "22px",
                    width: "89%",
                    color: "#999999",
                    paddingBottom: 150,
                  }}
                >
                  Melayani semua kebutuhan website Anda. Mulai dari desain,
                  pengembangan, domain, pengoperasian hingga pemeliharaan
                  berkala.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/PemSystem" style={{ textDecoration: "none" }}>
            <Card
              style={{ width: "27rem", alignItems: "center", paddingTop: 50 }}
            >
              <img src={SI} alt="SI" height={175} width={287} />
              <Card.Body>
                <Card.Title
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: "30px",
                    width: "100%",
                    color: "#3F3F3F",
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}
                >
                  Sistem Informasi Berbasis Web dan Mobile App
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "22px",
                    width: "100%",
                    color: "#999999",
                    paddingBottom: 150,
                  }}
                >
                  Melayani pembuatan dan perancangan sistem informasi berbasis
                  Mobile App (Android/iOS) untuk kebutuhan Anda.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <Card
            style={{ width: "27rem", alignItems: "center", paddingTop: 50 }}
          >
            <img src={Marketing} alt="Marketing" height={175} width={175} />
            <Card.Body>
              <Card.Title
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "32px",
                  color: "#3F3F3F",
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                Digital Marketing
              </Card.Title>
              <Card.Text
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "22px",
                  width: "90%",
                  color: "#999999",
                  paddingBottom: 150,
                }}
              >
                Membantu meningkatkan traffic dan kunjungan website Anda serta
                menampilkan di halaman utama Google menggunakan Google Ads
              </Card.Text>
            </Card.Body>
          </Card>
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
}

export default Home;
