import React, { useEffect, useState } from "react";
import styles from "../styles/helloWorld.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import axios from "axios";

function HelloWorld() {
  const array = [
    "www.asd.com",
    "www.bvgfd.com",
    "www.vbnnvb.com",
    "www.bcvcvb.com",
  ];
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/", {
        url: url,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  return (
    <div className={styles.container}>
      <h2>ACORTADOR DE URL'S</h2>
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
        <List component="nav" aria-label="main mailbox folders">
          {array.map((e) => (
            <ListItem button>
              <ListItemText primary={e} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
export default HelloWorld;
