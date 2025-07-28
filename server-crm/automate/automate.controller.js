import prisma from "../prisma/prismaClient.js"

export async function deleteOldAlerts() {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  try {
    const result = await prisma.Alertsandremainder.deleteMany({
      where: {
        date: {
          lt: sevenDaysAgo,
        },
      },
    });

    console.log(`Deleted ${result.count} old alerts.`);
  } catch (error) {
    console.error("Failed to delete old alerts:", error);
    throw error;
  }
}
