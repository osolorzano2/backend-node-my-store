const express = require("express");
const routerApi = require("./routes");
// const router = require("./routes")

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Holal mi server en express");
});

app.get("/nueva-ruta", (req, res) => {
  res.send("Soy la ruta 2");
});

routerApi(app);


// app.get("/users", (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//     });
//   } else {
//     res.send("No hay parametros");
//   };
// });

// app.get("/categories/:categoriId/products/:productId", (req, res) => {
//   const { categoriId, productId } = req.params;
//   res.json({
//     categoriId,
//     productId,
//   })
// })

app.listen(port,  () => {
  console.log("Mi port " + port)
});
