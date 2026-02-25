

export default function Extra() {
  return (
    <div
      style={{
        background: "#f7f8fc",
        padding: "100px 20px",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ff5f6d, #ffc371)",
          left: "-100px",
          top: "-100px",
          opacity: 0.3
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ff9966, #ff5e62)",
          right: "-60px",
          top: "50px",
          opacity: 0.3
        }}
      />

      {/* Title */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "600",
          marginBottom: "60px",
          color: "#333"
        }}
      >
        Don’t take our word for it.
        <br />
        Take theirs...
      </h2>

      {/* Testimonial Card */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden"
        }}
      >
        {/* Image Side */}
        <div
          style={{
            width: "40%",
            minHeight: "300px",
            background:
              "linear-gradient(135deg, #ff9966, #ff5e62)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="person"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "6px solid white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
          />
        </div>

        {/* Text Side */}
        <div
          style={{
            width: "60%",
            padding: "40px"
          }}
        >
          <h4
            style={{
              margin: "0",
              fontSize: "18px",
              fontWeight: "600",
              color: "#222"
            }}
          >
            Tanya Singer
          </h4>

          <p
            style={{
              fontSize: "13px",
              color: "#888",
              marginBottom: "20px"
            }}
          >
            Director of Growth Marketing
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#444"
            }}
          >
            Your product helped us to learn about our customers,
            intimately.
          </p>
        </div>
      </div>

      {/* Logos */}
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}
      >
        {["Pepsi", "Starbucks", "Twitch", "More customers"].map(
          (item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "20px 40px",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                fontWeight: "600",
                color: "#666"
              }}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
}