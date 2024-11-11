// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.history.deleteMany();
  await prisma.subscription.deleteMany();

  const subscriptions = [
    {
      service: 'hostinger.ae',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      price: 100,
      url: 'hostinger.ae',
      user: 'userA',
      pass: 'passA',
      newPassword: 'newPassA',
      expiresOn: new Date('2024-12-31'),
      hostingName: '',
      kind: '',
      nameOfDevelopmentTool: '',
      history: {
        create: [],
      },
    },
    {
      service: 'AwaelOfficial.co',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      price: 150,
      url: 'https://hpanel.hostinger.com/domains/',
      user: '',
      pass: '',
      newPassword: '',
      expiresOn: null,
      hostingName: '',
      kind: '',
      nameOfDevelopmentTool: '',
      history: {
        create: [],
      },
    },
    {
      service: 'sposhion.com - Domain',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      price: 200,
      url: '',
      user: '',
      pass: '',
      newPassword: '',
      expiresOn: null,
      hostingName: '',
      kind: '',
      nameOfDevelopmentTool: '',
      history: {
        create: [],
      },
    },
    {
      service: 'mugbil1.co',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      price: 250,
      url: 'https://manage.resellerclub.com/',
      user: '',
      pass: '',
      newPassword: '',
      expiresOn: null,
      hostingName: '',
      kind: '',
      nameOfDevelopmentTool: '',
      history: {
        create: [],
      },
    },
    {
      service: 'fgsports.com.sa - Domain',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      price: 300,
      url: '',
      user: '',
      pass: '',
      newPassword: '',
      expiresOn: null,
      hostingName: '',
      kind: '',
      nameOfDevelopmentTool: '',
      history: {
        create: [],
      },
    },
    {
      service: 'fansdestination.com - Domain',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      price: 350,
      url: '',
      user: '',
      pass: '',
      newPassword: '',
      expiresOn: null,
      hostingName: '',
      kind: '',
      nameOfDevelopmentTool: '',
      history: {
        create: [],
      },
    },
    {
      service: 'dash.cloudflare.com',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      price: 400,
      url: 'https://dash.cloudflare.com/',
      user: '',
      pass: '',
      newPassword: '',
      expiresOn: null,
      hostingName: '',
      kind: '',
      nameOfDevelopmentTool: '',
      history: {
        create: [],
      },
    },
  ];

  for (const subscription of subscriptions) {
    await prisma.subscription.create({ data: subscription });
  }

  console.log('Seeding finished.');
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
