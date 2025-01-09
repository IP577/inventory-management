import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./inventorySlice";
import StatsCard from "../../components/StatsCard";
import ProductTable from "../../components/ProductTable";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import "../../styles/InventoryView.css";

const InventoryView = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const totalProducts = products.reduce(
    (acc, product) => (!product.disabled ? ++acc : acc),
    0
  );

  const totalValue = products.reduce(
    (acc, product) =>
      !product.disabled
        ? acc + parseInt(product.price.replace("$", ""), 10) * product.quantity
        : acc,
    0
  );

  const outOfStock = products.filter(
    (product) => (product.quantity === 0) & !product.disabled
  ).length;

  const uniqueCategories = new Set(
    products
      .filter((product) => !product.disabled)
      .map((product) => !product.disabled && product.category)
  ).size;

  return (
    <div className="inventory-view">
      <div className="stats-section">
        <StatsCard
          title="Total Products"
          value={totalProducts}
          Icon={ShoppingCartIcon}
        />
        <StatsCard
          title="Total Store Value"
          value={`$${totalValue}`}
          Icon={AttachMoneyIcon}
        />
        <StatsCard
          title="Out of Stock"
          value={outOfStock}
          Icon={RemoveShoppingCartIcon}
        />
        <StatsCard
          title="No. of Categories"
          value={uniqueCategories}
          Icon={CategoryIcon}
        />
      </div>
      <ProductTable products={products} isAdmin={isAdmin} />
    </div>
  );
};

export default InventoryView;
