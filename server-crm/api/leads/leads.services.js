import prisma from "../../prisma/prismaClient.js";

export function createLead(data) {
  return prisma.lead.create({ data });
}

export function fetchLeadsByUser(userId, userType,username) {
  const query = {
    where: {
      isCurrentVersion: true, 
      ...(userType !== "admin" && { uid: userId }), 
    },
    select: {
      id: true,
      uid: true,
      username:true,
      cid: true,
      title: true,
      customerFirstName: true,
      customerLastName: true,
      emailAddress: true,
      phoneNumber: true,
      companyName: true,
      jobTitle: true,
      topicOfWork: true,
      industry: true,
      status: true,
      serviceInterestedIn: true,
      closingDate: true,
      notes: true,
      rootId: true,
      versionNumber: true,
      createdAt: true,
      updatedAt: true,
    },
  };

  return prisma.lead.findMany(query);
}

export async function deleteLeadById(id) {
  return await prisma.lead.delete({
    where: { id }
  });
}

export async function updateLeadById(id, username,updateData) {
  const currentLead = await prisma.lead.findUnique({
    where: { id }
  });

  if (!currentLead) {
    throw new Error("Lead not found");
  }

  await prisma.lead.update({
    where: { id },
    data: { isCurrentVersion: false }
  });

  const newVersion = await prisma.lead.create({
    data: {
      ...currentLead,
      ...updateData,
      id: undefined,
      username, 
      versionNumber: currentLead.versionNumber + 1,
      isCurrentVersion: true,
      rootId: currentLead.rootId || currentLead.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });

  return newVersion;
}

export async function fetchLeadWithHistory(id) {
  const currentLead = await prisma.lead.findUnique({
    where: { id }
  });

  if (!currentLead) {
    throw new Error("Lead not found");
  }

  const history = await prisma.lead.findMany({
    where: { rootId: currentLead.rootId },
    orderBy: { versionNumber: 'asc' }
  });

  return {
    current: currentLead,
    history
  };
}