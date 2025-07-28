import cron from "node-cron";
import { deleteOldAlerts } from "./automate.controller.js";

cron.schedule("2 11 * * *", async () => {
  try {
    console.log("Running daily alert cleanup...");
    await deleteOldAlerts();
    console.log("Old alerts deleted successfully.");
  } catch (error) {
    console.error("Error while deleting old alerts:", error);
  }
});
