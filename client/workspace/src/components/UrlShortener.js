import React, { useEffect, useState } from "react";
import styles from "../styles/helloWorld.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import MyTable from "./MyTable";
function UrlShortener() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [open, setOpen] = React.useState(false);
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then(function (response) {
        // handle success
        setData(Object.entries(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [url]);

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/", {
        url: url,
      })
      .then((response) => {
        setOpen(true);
        setUrl("");
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  return (
    <div className={styles.container}>
      <h2 style={{ fontSize: "4em" }}>ACORTADOR DE URL'S</h2>
      <div className={styles.input}>
        <TextField
          id="outlined-basic"
          label="Escribe tu URL"
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
        >
          AGREGAR
        </Button>
      </div>
      <div>
        <MyTable data={data} />
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          La url ha sido acortada!
        </Alert>
      </Snackbar>
    </div>
  );
}
export default UrlShortener;
