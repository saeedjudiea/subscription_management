import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const subscriptions = await prisma.subscription.findMany({
      include: {
        history: true,
      },
    });
    res.json(subscriptions);
  } else if (req.method === 'POST') {
    const {
      service, startDate, endDate, price, url, user, pass, newPassword, expiresOn, hostingName, kind, nameOfDevelopmentTool,
    } = req.body;

    const existingSubscription = await prisma.subscription.findFirst({
      where: { service },
    });

    if (existingSubscription) {
      return res.status(400).json({ error: 'Subscription with this service name already exists' });
    }

    const newSubscription = await prisma.subscription.create({
      data: {
        service,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        price: parseFloat(price),
        url,
        user,
        pass,
        newPassword,
        expiresOn: expiresOn ? new Date(expiresOn) : null,
        hostingName,
        kind,
        nameOfDevelopmentTool,
      },
    });
    res.json(newSubscription);
  } else {
    res.status(405).end();
  }
}