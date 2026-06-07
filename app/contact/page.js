// Contact and Support Inquiry Page
export default function ContactPage() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ borderBottom: "2px solid #ff4081", paddingBottom: "10px" }}>
        Contact Team 📞
      </h1>
      <p style={{ color: "#555" }}>
        Koi bhi technical user input issue ya bug report karne ke liye neeche
        details fill karein:
      </p>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Aapka Name"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        />
        <input
          type="email"
          placeholder="Aapki Email ID"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        />
        <textarea
          placeholder="Message ya Technical Problem likhein..."
          rows="5"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        ></textarea>

        <button
          type="button"
          style={{
            padding: "12px",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "not-allowed",
          }}
        >
          Submit Inquiry (Database Sync in Evening)
        </button>
      </form>
    </div>
  );
}
