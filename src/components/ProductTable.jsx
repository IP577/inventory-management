import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  disableProduct,
  editProduct,
} from "../features/inventory/inventorySlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomDialogBox from "./CustomDialogBox";
import "../styles/ProductTable.css";

const ProductTable = ({ products, isAdmin }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleDisable = (id) => {
    dispatch(disableProduct(id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: parseInt(product.price.replace("$", ""), 10),
      quantity: product.quantity,
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  const handleSave = () => {
    if (selectedProduct) {
      dispatch(
        editProduct({
          id: selectedProduct.id,
          updatedProduct: {
            ...selectedProduct,
            ...formData,
            price: `$${formData.price}`,
            quantity: Number(formData.quantity),
          },
        })
      );
    }
    handleCloseDialog();
  };

  return (
    <>
      <TableContainer component={Paper} className="table-container">
        <Table
          sx={{ minWidth: 650, backgroundColor: "#212124" }}
          aria-label="simple table"
          className="table-main"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={`${product.id}-${index}`}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ color: `${product.disabled ? "grey" : "#ffffff"}` }}
                >
                  {product.name}
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: `${product.disabled ? "grey" : "#ffffff"}` }}
                >
                  {product.category}
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: `${product.disabled ? "grey" : "#ffffff"}` }}
                >
                  {product.price}
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: `${product.disabled ? "grey" : "#ffffff"}` }}
                >
                  {product.quantity}
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: `${product.disabled ? "grey" : "#ffffff"}` }}
                >
                  {`$${
                    parseInt(product.price.replace("$", ""), 10) *
                    product.quantity
                  }`}
                </TableCell>

                <TableCell align="center">
                  <Tooltip title="Edit">
                    <IconButton
                      onClick={() => handleEdit(product)}
                      disabled={!isAdmin || product.disabled}
                      color="success"
                      style={{
                        color: `${
                          !isAdmin || product.disabled ? "grey" : "#377d22"
                        }`,
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={product.disabled ? "Disabled" : "Disable"}>
                    <IconButton
                      onClick={() => handleDisable(product.id)}
                      disabled={!isAdmin}
                      style={{ color: `${!isAdmin ? "grey" : "pink"}` }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => handleDelete(product.id)}
                      disabled={!isAdmin}
                      color="error"
                      style={{
                        color: `${!isAdmin ? "grey" : "#eb3323"}`,
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CustomDialogBox
        open={openDialog}
        onClose={handleCloseDialog}
        selectedProduct={selectedProduct}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSave={handleSave}
      />
    </>
  );
};

export default ProductTable;
