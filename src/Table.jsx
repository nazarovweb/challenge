
export default function Table() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <table
        style={{
          borderCollapse: "collapse",
          width: "600px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          overflow: "hidden"
        }}
      >
        <thead>
          <tr>
            <th
              colSpan={3}
              style={{
                padding: "15px",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "#f5f5f5",
                border: "1px solid #ddd"
              }}
            >
              Table
            </th>
          </tr>
        </thead>

        <tbody>
          {[1, 2, 3].map((row) => (
            <tr key={row}>
              {[1, 2, 3].map((col) => (
                <td
                  key={col}
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    transition: "0.3s",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#f0f8ff")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "white")
                  }
                >
                  Table
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}