import spinner from "../assets/loading.gif";

function Spinnner() {
  return (
    <img
      src={spinner}
      alt="loading..."
      style={{
        width: "100px",
        margin: "auto",
        display: "block",
      }}
    />
  );
}

export default Spinnner;
