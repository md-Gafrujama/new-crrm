import cron from "node-cron";
import { deleteOldAlerts, alertsOfTheDay } from "./automate.controller.js";
import { config as configDotenv } from "dotenv";

cron.schedule("50 11 * * *", async () => {
  try {
    await deleteOldAlerts();
    console.log("Old alerts deleted successfully.");
  } catch (error) {
    console.error("Error while deleting old alerts:", error);
  }
});


cron.schedule("*/5 * * * *", async () => {
  const start = Date.now();
  try {
    const alerts = await alertsOfTheDay();
    const msg = typeof alerts === 'string' ? alerts : 
                       alerts instanceof Object ? JSON.stringify(alerts) : 
                       String(alerts);
    const end = Date.now();
    const duration = end - start;

    const done = await fetch(process.env.LINK,{
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.WA_TOKEN}`,
        "Content-Type": "application/json"
      },
      data: {
        messaging_product: "whatsapp",
        to: process.env.PHONE,
        type: "alert",
        text: {
          body: msg
        }
      }
    });

    if(done){
      console.log("done");
    }

    console.log("Alerts of the day:", alerts);
  } catch (error) {
    console.error("Error while fetching alerts of the day:", error);
  }
});
