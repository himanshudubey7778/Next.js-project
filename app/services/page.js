"use client";
import { useState } from "react";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  // Professional Core Infrastructure Services Array
  const servicesList = [
    {
      id: "srv-01",
      title: "E-Commerce Cloud Dashboard",
      description:
        "High-performance enterprise merchant control panels built with state-of-the-art Next.js Turbopack pipelines.",
      features: [
        "Sub-second static rendering",
        "Real-time inventory logging",
        "Secure administrative route boundaries",
      ],
    },
    {
      id: "srv-02",
      title: "Secure API Gateway Integration",
      description:
        "Robust data transmission architecture featuring backend route validation pools and absolute connection lifecycle wrappers.",
      features: [
        "Native MongoDB aggregation queries",
        "Automated payload sanitization",
        "Optimized cross-origin request management",
      ],
    },
    {
      id: "srv-03",
      title: "AI-Powered Analytics Integration",
      description:
        "Forward-compatible analytical metrics setups designed to track dynamic data synchronization for cloud architectures.",
      features: [
        "Client-side computational scaling",
        "Asynchronous metric capturing",
        "Predictive user session behavioral logic",
      ],
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        maxWidth: "1000px",
        margin: "0 auto",
        color: "#333",
      }}
    >
      {/* Header Layout Component */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1
          style={{
            color: "#0070f3",
            fontSize: "2.6rem",
            margin: "0 0 10px 0",
            fontWeight: "700",
          }}
        >
          Core Technical Services 🚀
        </h1>
        <p style={{ color: "#666", fontSize: "1.1rem" }}>
          Tejjora-Shops Engineering Ecosystem — Highly optimized structural
          modules ready for production scaling.
        </p>
      </div>

      {/* Services Grid Framework */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
          marginBottom: "40px",
        }}
      >
        {servicesList.map((service) => (
          <div
            key={service.id}
            style={{
              background: "#ffffff",
              padding: "25px",
              borderRadius: "12px",
              border:
                selectedService?.id === service.id
                  ? "2px solid #0070f3"
                  : "1px solid #e2e8f0",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.02)",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onClick={() => setSelectedService(service)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "0 10px 15px rgba(0, 0, 0, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.02)";
            }}
          >
            <span
              style={{
                fontSize: "0.85rem",
                color: "#0070f3",
                fontWeight: "bold",
                textTransform: "uppercase",
                trackingSpace: "1px",
              }}
            >
              {service.id}
            </span>
            <h3
              style={{
                margin: "5px 0 12px 0",
                color: "#1a202c",
                fontSize: "1.3rem",
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                color: "#4a5568",
                fontSize: "0.95rem",
                lineHeight: "1.5",
                margin: "0 0 15px 0",
              }}
            >
              {service.description}
            </p>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#0070f3",
                fontWeight: "600",
                fontSize: "0.95rem",
                cursor: "pointer",
                padding: "0",
              }}
            >
              Explore Integration Specs →
            </button>
          </div>
        ))}
      </div>

      {/* Dynamic Detail Modal Component Layer */}
      {selectedService && (
        <div
          style={{
            background: "#f0f7ff",
            padding: "30px",
            borderRadius: "12px",
            border: "1px dashed #0070f3",
            marginTop: "20px",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0", color: "#0056b3" }}>
            Architecture Blueprint: {selectedService.title}
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#4a5568",
              marginBottom: "15px",
            }}
          >
            The compilation module includes standard operational features ready
            for cloud deployment:
          </p>
          <ul style={{ paddingLeft: "20px", margin: "0" }}>
            {selectedService.features.map((feature, idx) => (
              <li
                key={idx}
                style={{
                  color: "#2d3748",
                  fontSize: "0.95rem",
                  marginBottom: "8px",
                  lineHeight: "1.4",
                }}
              >
                🎯 {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
