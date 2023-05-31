const fs = require("fs");

const addresses = Array.from({ length: 10 }, (_, i) => i + 1);
const brandsFile = fs?.readFileSync(`../results/brands_data.json`, "utf8");
const brands = JSON?.parse(brandsFile);
const locations = [
  "Santa Fe",
  "Polanco",
  "Interlomas",
  "Del Valle",
  "Lomas Verdes",
  "Satelite",
  "Tlalnepantla",
  "Coyoacan",
  "Toluca",
  "Cuernavaca",
  "Puebla",
  "Queretaro",
  "Monterrey",
  "Guadalajara",
  "Merida",
  "Cancun",
  "Villahermosa",
  "Aguascalientes",
  "San Luis Potosi",
  "Naucalpan",
  "San Ángel",
  "Universidad",
  "Churubusco",
  "Vallejo",
  "Tlalpan",
  "Centenario",
  "Galerías",
  "Américas",
  "Acueducto",
  "Santa Anita",
  "Patria",
  "Tlaquepaque",
  "Cumbres",
  "Sendero",
  "Linda Vista",
  "Valle Oriente",
];
const groups = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let script = `
INSERT INTO public.dealerships
(
  dealership_name, 
  automotive_distributor_id, 
  logo_url,
  status,
  address_id,
  user_status
) 
VALUES
`;

// Create script
groups.forEach((groupId) => {
  dealershipsPerGroup = 10;
  for (let i = 0; i < dealershipsPerGroup; i++) {
    const address = addresses[Math.floor(Math.random() * addresses.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const name = `${brand.name} ${location}`;

    script += `('${name}', ${groupId}, '${brand.logo_url}', 'in-progress', ${address}, 'active'), \n`;
  }
});

fs.writeFileSync("../results/create_dealerships.sql", script);
