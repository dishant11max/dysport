import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Dishant",
  description: "Get in touch with Dishant for projects or collaborations.",
};

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: "#F4F4F4", minHeight: "100vh" }}>
      <Navbar />
      
      <section 
        style={{
          paddingTop: "clamp(120px, 15vh, 200px)",
          paddingBottom: "clamp(80px, 10vh, 140px)",
        }}
      >
        <div 
          className="grid-container" 
          style={{ 
            width: "100%", 
            maxWidth: "1400px", 
            margin: "0 auto", 
            padding: "0 clamp(24px, 5vw, 80px)" 
          }}
        >
          <div style={{ maxWidth: "720px" }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(60px, 8vw, 100px)",
                fontWeight: 400,
                lineHeight: "0.9",
                letterSpacing: "-0.04em",
                color: "#000",
                margin: "0 0 60px 0",
                textTransform: "uppercase"
              }}
            >
              Let's build<br />something great.
            </h1>

            <div style={{ marginBottom: "80px" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#888",
                  marginBottom: "24px",
                }}
              >
                EMAIL
              </p>
              <a
                href="mailto:savadiadishan@gmail.com"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 400,
                  color: "#111",
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  paddingBottom: "8px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.borderBottomColor = "rgba(0,0,0,0.8)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.borderBottomColor = "rgba(0,0,0,0.1)";
                }}
              >
                savadiadishan@gmail.com
              </a>
            </div>

            <div style={{ display: "flex", gap: "60px" }}>
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#888",
                    marginBottom: "16px",
                  }}
                >
                  SOCIAL
                </p>
                <div 
                  style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "12px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    fontWeight: 400
                  }}
                >
                  <a href="https://github.com/dishant11max" target="_blank" rel="noopener noreferrer" style={{ color: "#555", textDecoration: "none" }}>GitHub</a>
                  <a href="https://www.linkedin.com/in/dishant-savadia-b38b0a289/" target="_blank" rel="noopener noreferrer" style={{ color: "#555", textDecoration: "none" }}>LinkedIn</a>
                  <a href="https://x.com/dishant10510925" target="_blank" rel="noopener noreferrer" style={{ color: "#555", textDecoration: "none" }}>Twitter</a>
                  <a href="https://letterboxd.com/Dishahahant/" target="_blank" rel="noopener noreferrer" style={{ color: "#555", textDecoration: "none" }}>Letterboxd</a>
                </div>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#888",
                    marginBottom: "16px",
                  }}
                >
                  LOCATION
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    color: "#555",
                    fontWeight: 400
                  }}
                >
                  Ahmedabad, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
