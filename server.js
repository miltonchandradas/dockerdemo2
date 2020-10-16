const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

const handleProductsRequest = async (req, res) => {
   const response = await axios.get(
      "https://services.odata.org/V2/Northwind/Northwind.svc/Products?$format=json"
   );
   res.send(response.data.d.results);
};

const handleSuppliersRequest = async (req, res) => {
   const response = await axios.get(
      "https://services.odata.org/V2/Northwind/Northwind.svc/Suppliers?$format=json"
   );
   res.send(response.data.d.results);
};

app.get("/products", handleProductsRequest);
app.get("/suppliers", handleSuppliersRequest);

app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
});
