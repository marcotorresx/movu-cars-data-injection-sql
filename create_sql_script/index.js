const fs = require("fs");
const { getCarData } = require("./getCarData");

const fileNames = fs.readdirSync("../data");

let carModelsScript = `
INSERT INTO public.car_models 
(
  brand,
  model_name,
  body_type,
  year
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
    colors
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
  test_drive
) 
VALUES
`;

// Process data from each file
fileNames.slice(0, 5).forEach((fileName, i) => {
  // Get car data
  const carData = getCarData(fileName);

  // Add data to model script
  carModelsScript += `
  -- ${i}
  (
    '${carData.brand}',
    '${carData.model_name}',
    '${carData.body_type}',
    ${carData.year}
  ),`;

  // Add data to variant script
  const car_model_id = i + 1;
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
    '[${carData.colors.length ? JSON.stringify(carData.colors[0]) : {}}]'
  ),`;

  // Add data to listing script
  const car_variant_id = i + 1;
  listingScript += `
  -- ${i}
  (
    ${carData.dealership_id},
    ${car_variant_id},
    ${car_variant_id},
    ${carData.base_price},
    ${carData.available_test_drive}
  ),`;
});

// Download files
fs.writeFileSync("../results/create_models.sql", carModelsScript);
fs.writeFileSync("../results/create_variants.sql", carVariantsScript);
fs.writeFileSync("../results/create_listings.sql", listingScript);
