import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {/* Global Navbar - Ye har page par dikhega */}
        <nav
          style={{
            backgroundColor: "#131921",
            padding: "15px 30px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <Link
            href="/"
            style={{
              color: "#febd69",
              fontSize: "22px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Tejjora-Shops
          </Link>

          <div
            style={{
              flex: 1,
              display: "flex",
              gap: "20px",
              marginLeft: "40px",
            }}
          >
            <Link
              href="/dashboard"
              style={{ color: "white", textDecoration: "none" }}
            >
              Products
            </Link>
            <Link
              href="/services"
              style={{ color: "white", textDecoration: "none" }}
            >
              Prime Services
            </Link>
          </div>

          <Link
            href="/login"
            style={{
              color: "white",
              textDecoration: "none",
              border: "1px solid white",
              padding: "5px 15px",
              borderRadius: "4px",
            }}
          >
            Sign In
          </Link>
        </nav>

        {/* Yahan har page ka content render hoga */}
        <main>{children}</main>

        <footer
          style={{
            backgroundColor: "#232f3e",
            color: "white",
            padding: "40px",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <p>© 2026, Tejjora-shops Tech Project | Powered by Next.js</p>
        </footer>
      </body>
    </html>
  );
}
