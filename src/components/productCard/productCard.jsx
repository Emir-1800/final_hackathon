import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../context/CardContextProvider";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link, useNavigate } from "react-router-dom";

import "./Cart.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

  const StyledButton = styled(Button)`
    background-color: #fafafa;
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    &:hover {
      background-color: transparent;
      color: black;
      border: 1px solid black;
    }
  `;

  const navigate = useNavigate();
  console.log(cart);

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        my: "30px",
      }}
    >
      <Table
        sx={{ maxWidth: "700px", display: { xs: "none", sm: "table" } }}
        aria-label="customized table"
      >
        <TableRow>
          <StyledTableCell id="cartComponent" sx={{ padding: 0 }}>
            Picture
          </StyledTableCell>
          <StyledTableCell sx={{ padding: 0 }}>Name</StyledTableCell>

          <StyledTableCell sx={{ padding: 0 }}>Price</StyledTableCell>
          <StyledTableCell sx={{ padding: 0 }}>Count</StyledTableCell>
          <StyledTableCell sx={{ padding: 0 }}>SubPrice</StyledTableCell>
        </TableRow>

        <TableBody>
          {cart?.products.map((row) => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row" sx={{ padding: 0 }}>
                <img src={row.item.image} alt="" width="70" height="70" />
              </StyledTableCell>
              <StyledTableCell sx={{ padding: 0 }}>
                {row.item.name}
              </StyledTableCell>

              <StyledTableCell sx={{ padding: 0 }}>
                {row.item.price}
              </StyledTableCell>

              <StyledTableCell sx={{ padding: "0px" }}>
                <input
                  className="cartInput1"
                  type="number"
                  min={1}
                  max={1000}
                  value={row.count}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </StyledTableCell>

              <StyledTableCell>{row.subPrice}</StyledTableCell>

              <StyledTableCell>
                <IconButton onClick={() => deleteCartProduct(row.item.id)}>
                  <DeleteOutlineIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      {cart?.products.map((row) => (
        <Box
          key={row.item.id}
          sx={{
            display: {
              xs: "block",
              sm: "none",
              margin: "30px",
              fontSize: "20px",
            },
          }}
        >
          <img
            src={row.item.picture}
            alt=""
            width="90%"
            className="cartImage"
          />
          <br />
          <div className="cartSpan">{row.item.name}</div>
          <br />
          <div className="cartSpan">{row.item.price}$</div>
          <br />
          <div className="cartSpan">
            {" "}
            Count
            <input
              className="cartInput "
              type="number"
              min={1}
              max={1000}
              value={row.count}
              onChange={(e) => changeProductCount(e.target.value, row.item.id)}
            />
          </div>
          <div className="cartSpan">
            SubPrice: {row.subPrice}
            <IconButton
              color={"error"}
              onClick={() => deleteCartProduct(row.item.id)}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </div>
        </Box>
      ))}

      <Grid container sx={{ m: "0 10px", width: "200px", height: "100%" }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            margin: "12%",
          }}
        >
          <Typography textAlign="center" variant="h5">
            Summary
          </Typography>

          <StyledTableCell>Subtotal {cart?.totalPrice} $</StyledTableCell>

          <StyledTableCell>Shipping 10 $</StyledTableCell>

          <Typography display="flex" textAlign="center">
            {" "}
            <h3>TOTAL {cart?.totalPrice + 10} $</h3>
          </Typography>
        </Box>

        <StyledButton
          className="btnStyle"
          onClick={() => {
            cartCleaner();
            navigate("/payment");
          }}
        >
          Buy now
        </StyledButton>
      </Grid>
    </TableContainer>
  );
}
