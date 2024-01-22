require("dotenv").config();

const ethers = require("ethers");
const ThirdwebStorage = require("@thirdweb-dev/storage").ThirdwebStorage;
const fs = require("fs");

const storage = new ThirdwebStorage({
  secretKey: process.env.THIRDWEB_SECRET_KEY,
});

(async () => {
  const path = require("path");
  const imagePath = path.resolve(__dirname, "./road.jpg");
  const upload = await storage.upload(fs.readFileSync(imagePath));
  console.log("Upload URL: ", storage.resolveScheme(upload));
})();
