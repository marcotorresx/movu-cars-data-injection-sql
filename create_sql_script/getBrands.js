const fs = require("fs");
const { getCarData } = require("./getCarData");

const fileNames = fs.readdirSync("../data");

// Process data from each file
const brands = {};
fileNames.forEach((fileName) => {
  try {
    // Get car data
    const file = fs?.readFileSync(`../data/${fileName}`, "utf8");
    const allData = JSON?.parse(file);

    // Get relevant data
    const main = allData?.data?.data?.mainResult;
    brand = main?.car_make;
    logo_url = main?.make?.png;
    brands[brand] = {
      name: brand,
      logo_url: "https://images.prd.kavak.io" + logo_url,
    };
  } catch (error) {
    console.log(fileName);
  }
});

// Create files
let brandsScript = `
  INSERT INTO public.brands
  (
    name,
    logo_url
  )
  VALUES
`;
const brandsToIds = {};
const brandsData = [];

Object.keys(brands).forEach((key, i) => {
  // Add data to brands script
  const brand = brands[key];
  const pgId = i + 5;
  brandsScript += `
  (
    '${brand.name}',
    '${brand.logo_url}'
  ),`;

  brandsToIds[key] = pgId;
  brandsData.push(brands[key]);
});

// Download files
// fs.writeFileSync("../results/brands_data.json", JSON.stringify(brandsData));
// fs.writeFileSync("../results/create_brands.json", brandsScript);
