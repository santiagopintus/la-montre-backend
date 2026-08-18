import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const brands = [
  { name: 'Xiaomi' },
  { name: 'Skmei' },
  { name: 'Casio' },
  { name: 'Diesel' },
  { name: 'Garmin' },
  { name: 'Huawei' },
  { name: 'Mistral' },
  { name: 'Sweet' },
  { name: 'Samsung' },
  { name: 'Amazfit' },
  { name: 'Iwo' },
  { name: 'Swatch' },
  { name: 'Seiko' },
  { name: 'Citizen' },
  { name: 'Timex' },
  { name: 'Fossil' },
];

const watches = [
  {
    brandId: 1,
    model: 'Smart Band 5',
    price: 2939,
    digital: true,
    smart: true,
    imgName: 'Xiaomi_SmartBand5',
  },
  {
    brandId: 1,
    model: 'Smart Band 6',
    price: 4799,
    digital: true,
    smart: true,
    imgName: 'Xiaomi_SmartBand6',
  },
  {
    brandId: 1,
    model: 'Mi Watch Lite 1.4',
    price: 7719,
    digital: true,
    smart: true,
    imgName: 'Xiaomi_miWatchLite14',
  },
  {
    brandId: 1,
    model: 'Imilab W12',
    price: 6613,
    digital: true,
    smart: true,
    imgName: 'xiaomi_imilabW12',
  },
  {
    brandId: 2,
    model: '9096',
    price: 3699,
    digital: false,
    smart: false,
    imgName: 'Skmei_9096',
  },
  {
    brandId: 2,
    model: '1251',
    price: 2499,
    digital: true,
    smart: false,
    imgName: 'Skmei_1251',
  },
  {
    brandId: 3,
    model: 'A158wa',
    price: 4950,
    digital: true,
    smart: false,
    imgName: 'Casio_A158wa',
  },
  {
    brandId: 3,
    model: 'Mq-24',
    price: 2980,
    digital: false,
    smart: false,
    imgName: 'Casio_Mq-24',
  },
  {
    brandId: 3,
    model: 'GG-1000-1A3',
    price: 66132,
    digital: false,
    smart: false,
    imgName: 'Casio_GG-1000-1A3',
  },
  {
    brandId: 4,
    model: '6628',
    price: 4696.09,
    digital: false,
    smart: false,
    imgName: 'Diesel_6628',
  },
  {
    brandId: 4,
    model: '6630',
    price: 4586.75,
    digital: false,
    smart: false,
    imgName: 'Diesel_6630',
  },
  {
    brandId: 5,
    model: 'Instinct Tactical Coyote',
    price: 49995,
    digital: true,
    smart: true,
    imgName: 'Garmin_InstinctTacticalCoyote',
  },
  {
    brandId: 5,
    model: 'Forerunner 55',
    price: 37999,
    digital: true,
    smart: true,
    imgName: 'Garmin_Forerunner55',
  },
  {
    brandId: 5,
    model: 'Venu SQ',
    price: 38995,
    digital: true,
    smart: true,
    imgName: 'Garmin_VenuSQ',
  },
  {
    brandId: 6,
    model: 'Honor Band 5',
    price: 5499,
    digital: true,
    smart: true,
    imgName: 'Huawei_HonorBand5',
  },
  {
    brandId: 7,
    model: 'SMTM7',
    price: 12686.41,
    digital: false,
    smart: true,
    imgName: 'Mistral_SMTM7',
  },
  {
    brandId: 8,
    model: 'GpsPro',
    price: 12127,
    digital: true,
    smart: true,
    imgName: 'Sweet_GpsPro',
  },
  {
    brandId: 9,
    model: 'Galaxy Watch 4',
    price: 39999,
    digital: true,
    smart: true,
    imgName: 'samsung_galaxyWatch4',
  },
  {
    brandId: 10,
    model: 'Fashion GTS 2 Mini 1.55',
    price: 11399,
    digital: true,
    smart: true,
    imgName: 'Amazfit_FashionGTS2Mini155',
  },
  {
    brandId: 9,
    model: 'Galaxy Fit 2 1.1',
    price: 5599,
    digital: true,
    smart: true,
    imgName: 'Samsung_GalaxyFit211',
  },
  {
    brandId: 11,
    model: 'Fk78',
    price: 6149,
    digital: true,
    smart: true,
    imgName: 'Iwo_Fk78',
  },
  {
    brandId: 12,
    model: 'The Starry Night',
    price: 17995,
    digital: false,
    smart: false,
    imgName: 'Swatch_TheStarryNight',
  },
];

async function main() {
  const brandResult = await prisma.brand.createMany({
    data: brands,
    skipDuplicates: true,
  });
  console.log(`Inserted ${brandResult.count} brands`);

  const watchResult = await prisma.watch.createMany({
    data: watches,
    skipDuplicates: true,
  });
  console.log(`Inserted ${watchResult.count} watches`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
