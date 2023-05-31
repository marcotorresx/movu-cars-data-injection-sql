const fs = require("fs");

function getCarData(fileName) {
  const dealerships = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Read file and get json
  const file = fs?.readFileSync(`../data/${fileName}`, "utf8");
  const allData = JSON?.parse(file);

  // Get relevant data
  const main = allData?.data?.data?.mainResult;
  const carData = {};

  // ------------- Model data -------------
  carData.brand = main?.car_make;
  carData.model_name = main?.car_model;
  carData.body_type = main?.body_type;
  carData.year = main?.car_year || 2000;

  // ------------- Variant data -------------
  carData.full_name = main?.car_name;
  carData.variant_name = main?.car_trim;
  carData.is_new = carData?.year >= 2020 ? "TRUE" : "FALSE";
  carData.used_km = main?.km || 0;
  carData.fuel_type = main?.fuel_type;
  carData.horse_power = main?.horse_power;
  carData.passengers = main?.passengers || 0;
  carData.traction = main?.traction;
  carData.transmission = main?.transmission;
  carData.spin = allData?.data?.media?.details?.spin;

  // Color and images
  const original_color = main?.ext_color;
  const original_images =
    allData?.data?.checkout?.static?.media?.inventoryMedia;
  const images = [];
  original_images?.forEach((img) => {
    const image = {};
    image.img_url = "https://images?.kavak?.services/" + img?.media;
    image.order = img?.order;
    images.push(image);
  });
  const color = {
    name: original_color || "Negro",
    hex_code: "#000000",
    images,
  };
  carData.colors = [color];

  // ------------- Listing -------------
  carData.dealership_id =
    dealerships[Math?.floor(Math?.random() * dealerships?.length)];
  carData.status = "available";
  carData.base_price = main?.price || 0;
  carData.available_test_drive = "TRUE";

  return carData;
}

// function main() {
//   const fileName = "13225_ok?.json";
//   const carData = getCarData(fileName);
//   console?.log(carData);
// }

// // main();

exports.getCarData = getCarData;
