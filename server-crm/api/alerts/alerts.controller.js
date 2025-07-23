import prisma from "../../prisma/prismaClient.js";

const alertController = {
  async createAlert(req, res) {
    try {
      const { uid } = req.user;
      const {
        cid = "0",
        alerttopic,
        reminder,
        alertdate,
        remindertime,
        description,
      } = req.body;

      const alertData = await prisma.alertsandremainder.create({
        data: {
          uid,
          cid,
          topic: alerttopic,
          remainder: reminder,
          date: new Date(alertdate),
          time: remindertime,
          description,
        },
      });

      res.status(200).json(alertData);

    } catch (error) {
      console.error("Unable to add alert in server for now:", error);
      res.status(500).json({
        msg: error.message || "Internal server error",
      });
    }
  },

  async getAllAlert(req, res) {
    try {
      const { uid, userType } = req.user;
      const query = {
        select: {
          id: true,
          uid: true,
          topic: true,
          remainder: true,
          date: true,
          time: true,
          description: true,
        }
      }


      if (userType !== "admin") {
        query.where = { uid };
      }

      const alerts = await prisma.Alertsandremainder.findMany(query);

      return res.status(200).json({
        success: true,
        message: "Alerts retrieved successfully",
        data: alerts,
      })
    } catch (error) {
      console.error("Error fetching alerts:", error);

      return res.status(500).json({
        success: false,
        message: "An error occurred while retrieving alerts",
        error: error.message,
      });
    }
  },
}

export default alertController;