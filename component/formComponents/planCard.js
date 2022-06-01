import { Component } from "react";

class PlanCard extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "300px",
          padding: "30px",
          minWidth: "180px",
          textAlign: "center",
          maxWidth: "240px",
          backgroundColor: "blue",
          border: "1px solid white",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            minWidth: "180px",
            maxWidth: "240px",
            display: "flex",
            textAlign: "right",
            justifyContent: "right",
          }}
        >
          <input type="checkbox" />
        </div>

        <div
          style={{
            padding: "2px",
            marginTop: "38px",
          }}
        >
          <img
            src="../../public/assets/formPage/education.png"
            alt="Education"
            maxWidth="137px"
            height="130px"
          />
        </div>
        <div>
          <p style={{ fontWeight: "700px", fontSize: "20px" }}>
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

export default PlanCard;
