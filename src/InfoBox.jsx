import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const InfoBox = ({ info }) => {
  const Init_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ludGVyfGVufDB8fDB8fHww";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW58ZW58MHx8MHx8fDA%3D";

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <br />
      <br />
      <div style={{ width: "30%" }}>
        <Card sx={{ minWidth: 345 }}>
          <CardMedia
            sx={{ height: 225 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ marginTop: "20px" }}
            >
              {info.city}&nbsp;
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <h3>
                <b> {info.weather}</b>
              </h3>
              <h1>
                <b> Temp: {info.temp}&deg;C</b>
              </h1>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignItems: "inherit",
          marginTop: "60px",
        }}
      >
        <Card
          sx={{
            minWidth: 200,
            maxWidth: 200,
            marginBottom: "20px",
            backgroundColor: "rgb(189, 224, 254)",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h4>Humidity:</h4>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <h2>{info.humidity}%</h2>
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 200,
            maxWidth: 200,
            marginBottom: "20px",
            backgroundColor: "rgb(255, 200, 221)",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h4>Real Feel:</h4>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <h2> {info.feelsLike}&deg;C</h2>
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            minWidth: 200,
            maxWidth: 200,
            marginBottom: "20px",
            backgroundColor: "rgb(205, 180, 219)",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h4>Pressure:</h4>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <h2> {info.pressure} mb</h2>
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 200,
            maxWidth: 200,
            marginBottom: "20px",
            backgroundColor: "rgb(162, 210, 255)",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h4>Wind:</h4>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <h2> {info.wind} km/h</h2>
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 200,
            minHeight: 100,
            marginBottom: "20px",
            backgroundColor: "rgb(255, 175, 204)",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h4>Temperature History:</h4>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <h2>
                <ArrowUpwardIcon style={{ color: "red" }} /> {info.tempMax}
                &deg;C
              </h2>
              <h2>
                <ArrowDownwardIcon style={{ color: "green" }} /> {info.tempMin}
                &deg;C
              </h2>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
