// Help and Frequently Asked Questions Page
export default function HelpPage() {
  const faqs = [
    {
      q: "Tejjora-Shops par product kaise list karein?",
      a: "Dashboard par jaakar 'Add Product' API trigger se list kar sakte hain.",
    },
    {
      q: "Kya login session secure hai?",
      a: "Haan, backend system layers cookies aur credentials validation ko securely track karti hain.",
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ borderBottom: "2px solid #0070f3", paddingBottom: "10px" }}>
        Help & Support Center 🎯
      </h1>
      <p style={{ color: "#555" }}>
        Agar aapko Tejjora-Shops dashboard use karne mein koi dikkat aa rahi
        hai, toh neeche FAQs check karein:
      </p>

      <div style={{ marginTop: "30px" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              background: "#f9f9f9",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ margin: "0 0 8px 0", color: "#0070f3" }}>
              ❓ {faq.q}
            </h3>
            <p style={{ margin: "0", color: "#333" }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
