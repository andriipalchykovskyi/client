import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "20px auto",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "15px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
    },
  },
  media: {
    borderRadius: "15px 15px 0 0",
  },
  content: {
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    color: "#666",
  },
});

export default useStyles;
