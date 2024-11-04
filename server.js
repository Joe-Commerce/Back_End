const dotenv = require("dotenv").config({ path: "config/.env" });
const connectDatabase = require("./config/database");
const app = require("./app");

const PORT = process.env.PORT || 3000;

connectDatabase();

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
