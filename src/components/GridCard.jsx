import React from 'react'

export default function GridCard() {
return (
      <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center"
      }}
    >
      {/* Header */}
      <h2
        style={{
          fontSize: "28px",
          marginBottom: "40px",
          fontWeight: "600",
          color: "#333"
        }}
      >
      </h2>

      {/* Card */}
      <div
        style={{
          width: "340px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          overflow: "hidden",
          transition: "0.3s"
        }}
      >
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="article"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover"
          }}
        />

        {/* Content */}
        <div style={{ padding: "20px" }}>
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#222"
            }}
          >
            My paradise
          </h3>

          <p
            style={{
              fontSize: "12px",
              color: "#777",
              marginBottom: "15px"
            }}
          >
            Published 11.01.2022 by Anna Maria Doe
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#555",
              lineHeight: "1.6",
              marginBottom: "20px"
            }}
          >
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna
            placerat vulputate. Ut vulputate est non quam dignissim
            elementum.
          </p>

          {/* Button */}
          <button
            style={{
              padding: "10px 25px",
              borderRadius: "25px",
              border: "none",
              backgroundColor: "#4c63d2",
              color: "white",
              fontSize: "14px",
              cursor: "pointer",
              transition: "0.3s"
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#3b4db1")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#4c63d2")
            }
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  )
}
