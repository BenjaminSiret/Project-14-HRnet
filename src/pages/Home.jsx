import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import logo from '../assets/logo.jpg';

function Home() {
  return (
    <Container>
      <Box sx={{ textAlign: "center", padding: { xs: "20px", md: "50px" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid gray",
            borderRadius: "4px",
            padding: "20px",
            maxWidth: "300px",
            margin: "auto",
            marginBottom: "40px",
          }}
        > <img src={logo} alt="logo" />
          <Typography
            variant="h2"
            color=""
            sx={{
              fontSize: { xs: "2.5rem", sm: "4rem" },
              fontWeight: "bold",
              textShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            HRnet
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
          >
            Human Resources Application
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "40px",
            justifyContent: "center",
            marginTop: "30px",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              maxWidth: "150px",
            }}
            component={Link}
            to="/add"
          >
            Add an employee
          </Button>
          <Button
            variant="contained"
            sx={{
              maxWidth: "150px",
            }}
            component={Link}
            to="/list"
          >
            Employees list
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
