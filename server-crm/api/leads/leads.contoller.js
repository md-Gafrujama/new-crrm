import prisma from "../../prisma/prismaClient.js";
import {
  fetchLeadsByUser,
  createLead,
  deleteLeadById,
  updateLeadById
} from "./leads.services.js";
import { convertLeadsToCSV, convertStringToISODateString } from '../../utilis/csvExporter.js';




const leadsWork = {

  async addLeads(req, res) {
    try {
      const { uid } = req.user;
      const {
        title, customerFirstName, customerLastName, emailAddress, phoneNumber,
        companyName, jobTitle, topicOfWork, industry, status,
        serviceInterestedIn, closingDate, notes
      } = req.body;

      const closingDateISO = convertStringToISODateString(closingDate);
      if (!closingDateISO) {
        return res.status(400).json({ error: "Invalid closingDate" });
      }

      const lead = await createLead({
        uid, cid: "0", title, customerFirstName, customerLastName,
        emailAddress, phoneNumber, companyName, jobTitle,
        topicOfWork, industry, status, serviceInterestedIn,
        closingDate: closingDateISO, notes
      });

      res.status(201).json(lead);
    } catch (error) {
      console.error("Create Lead Error:", error);
      res.status(500).json({ error: "Failed to create lead" });
    }
  },

  async getLeads(req, res) {
    try {
      const { uid, userType } = req.user;
      const leads = await fetchLeadsByUser(uid, userType);
      res.status(200).json(leads);
    } catch (error) {
      console.error("Get Leads Error:", error);
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  },
  async delLeads(req, res) {
    try {
      const lead = await deleteLeadById(req.params.id);
      res.status(200).json(lead);
    } catch (error) {
      if (error.code === 'P2025') {
        res.status(404).json({ error: "Lead not found" });
      } else {
        res.status(500).json({ error: "Failed to delete lead", details: error.message });
      }
    }
  },

  async upLeads(req, res) {
    try {
      const { id: _id, ...updateData } = req.body;
      const lead = await updateLeadById(req.params.id, updateData);
      res.status(200).json(lead);
    } catch (error) {
      if (error.code === 'P2025') {
        res.status(404).json({ error: "Lead not found" });
      } else {
        res.status(500).json({ error: "Failed to update lead", details: error.message });
      }
    }
  }

}
export default leadsWork;