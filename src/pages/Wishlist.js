import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";

import product1 from "../assets/images/product.webp";
import product2 from "../assets/images/product2.webp";
import product3 from "../assets/images/product3.webp";

import Button from "../components/button";
import { globalStyles } from "../components/styles/styles";
import { wishlistStyles } from "./Styles";
import Layout from "../layout";

function createData(image, name, price, stockStatus) {
    return { image, name, price, stockStatus };
}

const rows = [
    createData(product1, "Handbag Fringilla", 65.0, "In Stock"),
    createData(product2, "Handbags Justo", 90.0, "In Stock"),
    createData(product3, "Handbag Elit", 80.0, "In Stock"),
];

export default function Wishlist() {
    const classes = wishlistStyles();
    const globalClasses = globalStyles();

    return (
        <Layout>
            <div className={globalClasses.header}>
                <div>
                    <h1>Wishlist</h1>
                    <div>
                        <Link to="/">Home</Link> / Wishlist
                    </div>
                </div>
            </div>
            <div></div>
            <Container
                maxWidth="lg"
                className={globalClasses.featuresSectionStyle}
            >
                <TableContainer
                    component={Paper}
                    className={classes.wishlistTable}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Delete</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Stock Status</TableCell>
                                <TableCell>Add to cart</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                        height: "122px",
                                    }}
                                >
                                    <TableCell>
                                        <ClearIcon />
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <img src={row.image} alt="product" />
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell className="price">
                                        <p>£{row.price}</p>
                                    </TableCell>
                                    <TableCell className="stockStatus">
                                        {row.stockStatus}
                                    </TableCell>
                                    <TableCell>
                                        <Button type="primary" disableRipple>
                                            Add to cart
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Layout>
    );
}
