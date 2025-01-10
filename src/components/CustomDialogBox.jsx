import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/CustomDialogBox.css";

const SX_TEXTFIELD = {
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
};

const CustomDialogBox = (props) => {
  const {
    open,
    onClose,
    selectedProduct,
    formData,
    handleInputChange,
    handleSave,
  } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#292b27",
          color: "#ffffff",
        },
      }}
    >
      <DialogTitle className="dialogue-title">
        <section className="title-section">
          <div className="title1">Edit Product</div>
          <div className="title2">{selectedProduct?.name}</div>
        </section>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className="dialog-content">
        <TextField
          margin="dense"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          sx={SX_TEXTFIELD}
        />
        <TextField
          margin="dense"
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          sx={SX_TEXTFIELD}
        />
        <TextField
          margin="dense"
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleInputChange}
          inputProps={{
            min: 0,
          }}
          sx={SX_TEXTFIELD}
        />
        <TextField
          margin="dense"
          label="Quantity"
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleInputChange}
          inputProps={{
            min: 0,
          }}
          sx={SX_TEXTFIELD}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          color="inherit"
          sx={{
            color: "#d8f854",
            "&:hover": {
              color: "#b9de22",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          color="primary"
          variant="contained"
          sx={{
            backgroundColor: "#d8f854",
            color: "#000000",
            "&:hover": {
              backgroundColor: "#b9de22",
            },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialogBox;
