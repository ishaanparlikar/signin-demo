import {
  Card,
  Checkbox,
  Container,
  Input,
  Link,
  TextField,
} from "@mui/material";
import type { NextPage } from "next";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";

const Home: NextPage = () => {
  return (
    <Container
      className="mainContainer"
      sx={{
        border: "1px solid #e7e7e7",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          boxShadow: "none",
          width: "auto",
          margin: "0 auto",
          padding: "32px",
        }}
      >
        <Button
          className="Button"
          sx={{ color: "black", textTransform: "capitalize", fontSize: "14px" }}
          variant="text"
          startIcon={<ArrowBackIcon />}
        >
          Go Back
        </Button>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{
            margin: "28px auto",
            width: "120px",
            objectFit: "contain",
            borderRadius: "50%",
          }}
          src="/logo2x.jpg"
        />
        <CardContent sx={{ padding: 0 }}>
          <Typography
            margin={"8px"}
            align="center"
            fontSize={"30px"}
            variant="h5"
            component="div"
          >
            Join Olivia&apos;s Newsletter
          </Typography>
          <Typography
            margin={"8px"}
            align="center"
            variant="body2"
            fontSize={"18px"}
            color="lightgray"
          >
            Olivia is inviting to their team
          </Typography>

          <TextField
            className="textField"
            sx={{ margin: "8px 0" }}
            size="small"
            placeholder="Enter your email"
            fullWidth
            hiddenLabel
            type={"email"}
            variant="outlined"
          />
          <TextField
            className="textField"
            sx={{ margin: "8px 0" }}
            size="small"
            placeholder="Enter your password"
            fullWidth
            hiddenLabel
            type={"password"}
            variant="outlined"
          />
        </CardContent>
        <CardActions sx={{ padding: "8px 0" }}>
          <Checkbox sx={{ borderRadius: "8px", padding: "0 8px 0 0" }} />
          <Typography color={"#344054"} variant="body2" fontSize={"14px"}>
            I agree to{" "}
            <Link
              sx={{ color: "#344054", textDecorationColor: "black" }}
              href="#"
            >
              Terms and Conditions
            </Link>
          </Typography>
        </CardActions>
        <CardActions sx={{ padding: "8px 0" }}>
          <Button
            className="con_btn"
            size="medium"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#292929", color: "white" }}
          >
            Continue
          </Button>
        </CardActions>
        <Typography align="center" sx={{ paddingTop: "16px" }}>
          <Link underline="none" href="#" sx={{ color: "#525252" }}>
            Already have an account?
          </Link>
        </Typography>
      </Card>
    </Container>
  );
};

export default Home;
