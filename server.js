const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
//CORS
app.use(cors());

// Ruta GET
app.get("/api/datos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products",
      {
        headers: {
          authorId: "20230520",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
app.get("/api/datos/product/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/verification?id=${req.params.id}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: error.response.data });
  }
});

// Ruta POST
app.post("/api/datos", async (req, res) => {
  try {
    const response = await axios.post(
      `https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products`,
      {
        headers: {
          authorId: "20230520",
        },
      },
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: error.response.data });
  }
});

// Ruta PUT
app.put("/api/datos", async (req, res) => {
  try {
    const response = await axios.put(
      `https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products`,
      req.body,
      {
        headers: {
          authorId: "20230520",
        },
      }
    );
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
    res.status(404).json({ error: error.response.data });
  }
});

// Ruta DELETE
app.delete("/api/datos/:id", async (req, res) => {
  try {
    const response = await axios.delete(
      `https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products?id=${req.params.id}`,
      {
        headers: {
          authorId: "20230520",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: error.response.data });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});
