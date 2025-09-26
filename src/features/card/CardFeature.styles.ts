import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "20px auto",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "15px",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
    },
  },
  media: {
    borderRadius: "15px 15px 0 0",
  },
  content: {
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  description: {
    color: "#666",
    marginBottom: "15px",
    minHeight: "100px",
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "20px",
    padding: "10px 20px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
});

export default useStyles;
