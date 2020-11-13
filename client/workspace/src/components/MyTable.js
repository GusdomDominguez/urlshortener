import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(url, shorturl) {
  return { url, shorturl };
}

export default function MyTable(props) {
  const data = props.data;

  console.log(data);
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>URL</TableCell>
            <TableCell align="right">Url Acortada&nbsp;(link)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            ? data.map((data) => (
                <TableRow key={data.url}>
                  <TableCell component="th" scope="row">
                    {data[1]}
                  </TableCell>
                  <TableCell align="right">
                    <a href={`http://localhost:3000/url/${data[0]}`}>
                      {"localhost:3000/url/" + data[0]}
                    </a>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
