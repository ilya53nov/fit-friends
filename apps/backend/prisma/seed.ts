
import { PrismaClient } from '@prisma/client';

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const ADDRESS = `http://${HOST}:${PORT}/`;

const images = [
  'gym-01.jpg',
  'gym-02.jpg',
  'gym-03.jpg',
  'gym-04.jpg',
  'gym-05.jpg',
]

const Gym01 = {
  id: 1,
  title: 'REFORMA',
  location: 'ст. м. Пионерская',
  isVerified: true,
  types: ['бассейн'],
  images: [`${ADDRESS}${images[0]}`],
  description: 'Более 200 современных тренажеров, множество дополнительных фитнес-услуг и лучшие тренеры Санкт-Петербурга.',
  price: 1000,
  createdAt: new Date(),
}

const Gym02 = {
  id: 2,
  title: 'NEO',
  location: 'ст. м. Петроградская',
  isVerified: true,
  types: ['бассейн', 'бесплатная парковка'],
  images: [`${ADDRESS}${images[1]}`],
  description: 'Новый, небольшой и уютный спортивный комплекс с современным оборудованием и потрясающим видом на город.',
  price: 1100,
  createdAt: new Date(),
}

const Gym03 = {
  id: 3,
  title: 'FITSTAR',
  location: 'ст. м. Удельная',
  isVerified: true,
  types: ['детская комната', 'бесплатная парковка'],
  images: [`${ADDRESS}${images[2]}`],
  description: 'Комплекс площадью более 1200 м2, 20 зон для проведения разнообразных групповых и индивидуальных тренировок.',
  price: 1200,
  createdAt: new Date(),
}

const Gym04 = {
  id: 4,
  title: 'GRAND FITNESS',
  location: 'ст. м. Звёздная',
  isVerified: true,
  types: ['детская комната', 'массаж'],
  images: [`${ADDRESS}${images[3]}`],
  description: 'Спортивный комплекс премиум-класса с 3 видами сауны, бассейном длинной 54 м., услугами массажиста и большой парковкой.',
  price: 1300,
  createdAt: new Date(),
}

const Gym05 = {
  id: 5,
  title: 'АТЛЕТИКА',
  location: 'ст. м. Спортивная',
  isVerified: true,
  types: ['детская комната', 'массаж', 'бассейн', 'бесплатная парковка'],
  images: [`${ADDRESS}${images[4]}`],
  description: 'Спортивный комплекс премиум-класса с 3 видами сауны, бассейном длинной 54 м., услугами массажиста и большой парковкой.',
  price: 1300,
  createdAt: new Date(),
}

const prisma = new PrismaClient();

async function fillDb() {

  await prisma.gym.upsert({
    where: {
      id: Gym01.id,
    },
    update: {
      ...Gym01,
    },
    create: {
      ...Gym01,
    }
  })

  await prisma.gym.upsert({
    where: {
      id: Gym02.id,
    },
    update: {
      ...Gym02,
    },
    create: {
      ...Gym02,
    }
  })

  await prisma.gym.upsert({
    where: {
      id: Gym03.id,
    },
    update: {
      ...Gym03,
    },
    create: {
      ...Gym03,
    }
  })

  await prisma.gym.upsert({
    where: {
      id: Gym04.id,
    },
    update: {
      ...Gym04,
    },
    create: {
      ...Gym04,
    }
  })

  await prisma.gym.upsert({
    where: {
      id: Gym05.id,
    },
    update: {
      ...Gym05,
    },
    create: {
      ...Gym05,
    }
  })

  console.info('🤘️ Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
