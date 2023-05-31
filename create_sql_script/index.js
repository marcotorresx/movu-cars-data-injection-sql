const fs = require("fs");
const { getCarData } = require("./getCarData");
const { saveElastic } = require("./saveElastic");

const fileNames = fs.readdirSync("../data");

let carModelsScript = `
INSERT INTO public.car_models 
(
  brand,
  model_name,
  body_type,
  year,
  batch
) 
VALUES
`;

let carVariantsScript = `
INSERT INTO public.car_variant
(
  car_model_id,
  full_name,
  variant_name,
  is_new,
  used_km,
  fuel_type,
  horse_power,
  passengers,
  traction,
  transmission,
  spin,
  colors,
  batch
)
VALUES
`;

let listingScript = `
INSERT INTO public.listings
(
  dealership_id, 
  car_model_id, 
  car_variant_id, 
  base_price, 
  test_drive,
  batch
) 
VALUES
`;

// Get brands
const brandsFile = fs.readFileSync("../results/new_brands.json", "utf8");
const brands = JSON.parse(brandsFile);
const batch = 10;

// Process data from each file
fileNames.slice(9000, 10000).forEach((fileName, i) => {
  // Get car data
  const carData = getCarData(fileName, brands);
  const listingId = i + 9002;

  // Add data to model script
  carModelsScript += `
  -- ${i}
  (
    ${carData.brand},
    '${carData.model_name}',
    '${carData.body_type}',
    ${carData.year},
    ${batch}
  ),`;

  // Add data to variant script
  const car_model_id = listingId;
  carVariantsScript += `
  -- ${i}
  (
    ${car_model_id},
    '${carData.full_name}',
    '${carData.variant_name}',
    ${carData.is_new},
    ${carData.used_km},
    '${carData.fuel_type}',
    '${carData.horse_power}',
    ${carData.passengers},
    '${carData.traction}',
    '${carData.transmission}',
    '${carData.spin}',
    '[${carData.colors.length ? JSON.stringify(carData.colors[0]) : {}}]',
    ${batch}
  ),`;

  // Add data to listing script
  const car_variant_id = listingId;
  listingScript += `
  -- ${i}
  (
    ${carData.dealership_id},
    ${car_variant_id},
    ${car_variant_id},
    ${carData.base_price},
    ${carData.available_test_drive},
    ${batch}
  ),`;
});

// Download files
fs.writeFileSync("../results/create_models.sql", carModelsScript);
fs.writeFileSync("../results/create_variants.sql", carVariantsScript);
fs.writeFileSync("../results/create_listings.sql", listingScript);
