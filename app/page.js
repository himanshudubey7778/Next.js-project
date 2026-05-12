import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#eaeded",
        minHeight: "100vh",
      }}
    >
      {/* Navbar Jaisa Header */}
      <header
        style={{
          backgroundColor: "#131921",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "24px", margin: 0, color: "#febd69" }}>
          Sultanpur Amazon
        </h1>
        <nav>
          <Link
            href="/dashboard"
            style={{
              color: "white",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            Products
          </Link>
          <Link
            href="/services"
            style={{ color: "white", textDecoration: "none" }}
          >
            Services
          </Link>
        </nav>
      </header>

      {/* Hero Section (Banner) */}
      <div
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(234,237,237,1)), url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1350&q=80")',
          height: "400px",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Big Sale is Live! 🚀
        </h2>
        <p style={{ fontSize: "20px" }}>
          Exclusive Tech Deals for Sultanpur Developers
        </p>
        <Link href="/dashboard">
          <button
            style={{
              backgroundColor: "#ffd814",
              border: "none",
              padding: "12px 30px",
              borderRadius: "8px",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "15px",
            }}
          >
            Shop Now
          </button>
        </Link>
      </div>

      {/* Quick Navigation Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "-50px",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            width: "300px",
            borderRadius: "5px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Latest Gadgets</h3>
          <p>Check out the newest coding keyboards and monitors.</p>
          <Link
            href="/dashboard"
            style={{ color: "#007185", textDecoration: "none" }}
          >
            Explore More
          </Link>
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            width: "300px",
            borderRadius: "5px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Prime Services</h3>
          <p>Get 24-hour delivery in Sultanpur and nearby areas.</p>
          <Link
            href="/services"
            style={{ color: "#007185", textDecoration: "none" }}
          >
            View Benefits
          </Link>
        </div>
      </div>
    </div>
  );
}
