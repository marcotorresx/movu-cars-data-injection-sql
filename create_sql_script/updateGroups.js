const fs = require("fs");

const groups = [
  {
    name: "Grupo Surman",
    logo_url: "https://proveedores.surman.com/images/surman_logoNegro.png",
  },
  {
    name: "Grupo Soni",
    logo_url:
      "https://s3.amazonaws.com/seminuevos-migration/dealer_publiya/559/559_1485380794_160.png",
  },
  {
    name: "Grupo Dalton",
    logo_url: "https://www.daltoncorporacion.com.mx/images/dalton_logo.png",
  },
  {
    name: "Grupo Andrade",
    logo_url: "https://www.grupoandrade.com/Imagenes/Default/logoGA.png",
  },
  {
    name: "Grupo Witt",
    logo_url:
      "https://images.latamautos.com/thumbs/s/180x100/ptx_migration_mexico/dealer_publiya/677/677_1674768570234_888.jpg",
  },
  {
    name: "Grupo Satélite",
    logo_url:
      "https://a.storyblok.com/f/106187/4000x3500/e572b75387/logonegro-1.png",
  },
  {
    name: "Grupo Cever",
    logo_url: "https://cever.com.mx/wp-content/uploads/cever.png",
  },
  {
    name: "Grupo Alden",
    logo_url:
      "https://s3.amazonaws.com/images.maxipublica.com/customer/logo/logo/286/8e7021190c5ba_a.png",
  },
  {
    name: "Grupo Kasa",
    logo_url: "https://promocioneskasa.com.mx/img/backheader.png",
  },
  {
    name: "Grupo Torres Corzo",
    logo_url:
      "https://ii.ct-stc.com/2/logos/empresas/2022/10/08/nissan-forum-A416D519E73424D3174036110thumbnail.png",
  },
  {
    name: "Grupo Zapata",
    logo_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbQvGxL4RdPCjl4RVSyma46xo6JU5qdApKJjD_mRmEvZxWvFPsR6dheI9vND__5JN7IE&usqp=CAU",
  },
  {
    name: "Grupo Autofin",
    logo_url:
      "https://cdn.shopify.com/s/files/1/0899/2262/files/656_medium.png?12850",
  },
  {
    name: "Grupo Autocom",
    logo_url: "https://www.autocom.mx/static/dealer-19673/logo.png",
  },
  {
    name: "Grupo Iztacalco Motors",
    logo_url:
      "https://www.chevroletiztacalco.com.mx/content/dam/chevrolet/na/mx/es/index/about-us/logos-e/4/186015-Iztacalco.jpg?imwidth=960",
  },
  {
    name: "Grupo FAME",
    logo_url:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/imqoljudwuirxu9rcwle",
  },
  {
    name: "Grupo Autosur",
    logo_url:
      "https://s3.amazonaws.com/seminuevos-migration/dealer_publiya/712/712_1608655120140_679.png",
  },
  {
    name: "Grupo Solana",
    logo_url:
      "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/852b81328a0392ced6a4ea2d6605abee",
  },
  {
    name: "Grupo GOCAR",
    logo_url:
      "https://images.latamautos.com/thumbs/s/1501x400/ptx_migration_mexico/dealer_publiya/560/560_1641586961220_185.png",
  },
  {
    name: "Grupo Autosat",
    logo_url:
      "https://www.mercedes-benz-autosat.com.mx/content/dam/retail/mexico/XY03647383/passengercars/autosat-logo.png",
  },
  {
    name: "Grupo Geisha",
    logo_url:
      "https://pbs.twimg.com/profile_images/783373398554521600/feJmkmXA_400x400.jpg",
  },
  {
    name: "Grupo Vento",
    logo_url:
      "https://motociclo.com.mx/wp-content/uploads/2021/02/port-vento.jpg",
  },
  {
    name: "Grupo Autolarte",
    logo_url:
      "https://amigotex.com/wp-content/uploads/2021/10/Logo-Autolarte-1024x211.png",
  },
  {
    name: "Grupo Auto Vardí",
    logo_url:
      "https://vehiculos.elpais.com.co/uploads/minisites/logo/medium_1419264488-1614.jpg",
  },
];

let groupsScript = "";

groups.forEach((group, i) => {
  groupsScript += `UPDATE public.automotive_distributors SET name='${
    group.name
  }', logo_url='${group.logo_url}' WHERE id=${i + 1};\n`;
});

fs.writeFileSync("../results/update_groups.sql", groupsScript);
