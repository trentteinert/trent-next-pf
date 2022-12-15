import { PrismaClient } from '@prisma/client';
import { images } from './images';

const prisma = new PrismaClient();

async function main() {
  for (let imageList of images) {
    await prisma.images.create({
      data: imageList,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect;
  });
