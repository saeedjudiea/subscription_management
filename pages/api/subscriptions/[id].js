import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const subscription = await prisma.subscription.findUnique({
      where: { id: parseInt(id) },
      include: { history: true },
    });
    res.json(subscription);
  } else if (req.method === 'PUT') {
    const {
      service, startDate, endDate, price, url, user, pass, newPassword, expiresOn, hostingName, kind, nameOfDevelopmentTool,
    } = req.body;

    const existingSubscription = await prisma.subscription.findUnique({
      where: { id: parseInt(id) },
    });

    await prisma.history.create({
      data: {
        startDate: existingSubscription.startDate,
        endDate: existingSubscription.endDate,
        price: existingSubscription.price,
        subscriptionId: existingSubscription.id,
      },
    });

    const updatedSubscription = await prisma.subscription.update({
      where: { id: parseInt(id) },
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

    res.json(updatedSubscription);
  } else if (req.method === 'DELETE') {
    await prisma.subscription.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}