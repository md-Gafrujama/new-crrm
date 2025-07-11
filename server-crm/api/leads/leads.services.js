import prisma from "../../prisma/prismaClient.js";

export function createLead(data) {
  return prisma.lead.create({ data });
}

export function fetchLeadsByUser(userId, userType) {
  const query = {
    select: {
      id: true, title: true, customerFirstName: true, customerLastName: true,
      emailAddress: true, phoneNumber: true, jobTitle: true, topicOfWork: true,
      industry: true, status: true, serviceInterestedIn: true, closingDate: true, notes: true,
    },
  };
  if (userType !== "admin") query.where = { uid: userId };
  return prisma.lead.findMany(query);
}
export async function deleteLeadById(id) {
  return await prisma.lead.delete({
    where: { id }
  });
}

export async function updateLeadById(id, updateData) {
  return await prisma.lead.update({
    where: { id },
    data: updateData
  });
}
