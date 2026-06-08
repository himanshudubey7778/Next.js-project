"use client";
import { useState } from "react";

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userRating, setUserRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Professional English documentation schema dataset
  const faqs = [
    {
      q: "How do I list a new product on Tejjora-Shops?",
      a: "Navigate to your merchant dashboard and trigger the 'Add Product' API interface to update the repository inventory.",
    },
    {
      q: "Is the authentication session secure?",
      a: "Yes, the system layer securely tracks session identities using dynamic middleware tokens and production-grade cookie validation.",
    },
    {
      q: "What should I do if the production build fails?",
      a: "Clear conflicting lockfiles from your project root directory and verify that all system dependencies use relative path mapping configuration.",
    },
    {
      q: "Where are the system environment variables stored?",
      a: "All secret infrastructure credentials and API keys are stored securely inside the root-level '.env.local' configuration layer.",
    },
  ];

  // Client-side execution logic filtering the content tree dynamically
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        color: "#333",
      }}
    >
      {/* Header Framework Layout */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1
          style={{
            color: "#0070f3",
            fontSize: "2.5rem",
            margin: "0 0 10px 0",
            fontWeight: "700",
          }}
        >
          Help & Support Center 🎯
        </h1>
        <p style={{ color: "#666", fontSize: "1.1rem" }}>
          Tejjora-Shops Support Infrastructure — Query real-time questions
          compiled by Next.js Turbopack Engine.
        </p>
      </div>

      {/* Dynamic Live Search Interface Wrapper */}
      <div style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="🔍 Type to search FAQs instantly (e.g., Auth, Build, Products)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "8px",
            border: "2px solid #0070f3",
            fontSize: "1rem",
            outline: "none",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            transition: "border-color 0.2s",
          }}
        />
      </div>

      {/* FAQ Schema Dynamic Grid Engine */}
      <div style={{ marginTop: "20px" }}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={index}
              style={{
                marginBottom: "15px",
                background: "#f8f9fa",
                padding: "20px",
                borderRadius: "8px",
                borderLeft: "5px solid #0070f3",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px 0",
                  color: "#0070f3",
                  fontSize: "1.2rem",
                }}
              >
                ❓ {faq.q}
              </h3>
              <p
                style={{
                  margin: "0",
                  color: "#444",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                {faq.a}
              </p>
            </div>
          ))
        ) : (
          <p
            style={{
              textAlign: "center",
              color: "#999",
              fontStyle: "italic",
              padding: "20px",
            }}
          >
            No relevant topics match your search. Live cloud-database queries
            will be integrated during the next sprint.
          </p>
        )}
      </div>

      <hr
        style={{ margin: "40px 0", border: "0", borderTop: "1px solid #eee" }}
      />

      {/* Interactive State Feedback Utility Component */}
      <div
        style={{
          background: "#f0f7ff",
          padding: "30px",
          borderRadius: "12px",
          textAlign: "center",
          border: "1px dashed #0070f3",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0", color: "#0056b3" }}>
          Was this support layer helpful? ⭐
        </h3>
        {!submitted ? (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                margin: "15px 0",
              }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setUserRating(star)}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "2rem",
                    cursor: "pointer",
                    color: star <= userRating ? "#ffc107" : "#ccc",
                    transition: "transform 0.1s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.2)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  ★
                </button>
              ))}
            </div>
            <button
              onClick={() => setSubmitted(true)}
              disabled={userRating === 0}
              style={{
                padding: "10px 25px",
                background: userRating > 0 ? "#0070f3" : "#ccc",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: userRating > 0 ? "pointer" : "not-allowed",
                fontWeight: "bold",
                fontSize: "1rem",
                transition: "background-color 0.2s",
              }}
            >
              Submit Feedback
            </button>
          </div>
        ) : (
          <p
            style={{
              color: "#28a745",
              fontWeight: "bold",
              margin: "15px 0 0 0",
              fontSize: "1.1rem",
            }}
          >
            🎉 Thank you! Your {userRating}-Star rating has been successfully
            synchronized to the local state system.
          </p>
        )}
      </div>
    </div>
  );
}
