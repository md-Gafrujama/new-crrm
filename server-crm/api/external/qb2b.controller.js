import prisma from "../../prisma/prismaClient.js";

const qb2b = {

    async Contact(req, res) {
        try {
            const { userFirstName, userLastName, comment } = req.body;
            const qb2bform = await prisma.QB2b.create({
                data: {
                    firstName: userFirstName,
                    lastName: userLastName,
                    comment,
                },
            });

            return res.status(201).json({
                message: "Your comment has been send.",
            });

        }
        catch (error) {
            console.error("Something went wrong", error);
            return res.status(500).json({
                message: "Internal server error",
            });
        }
    },

    async getContact(req, res) {
        try {
            const contact = await prisma.Qb2b.findMany();
            return res.status(200).json(contact);
        } catch (error) {
            console.error("Error fetching data", error);
            return res.status(500).json({
                message: "Internal server error",
            });
        }
    },

    async Leads(req, res) {
        try {
            const { customerName, emailAddress, phoneNumber, serviceInterestedIn, needs,promotion } = req.body;
            const qb2bform = await prisma.qb2bLeads.create({
                data: {
                    customerName,
                    emailAddress,
                    phoneNumber,
                    serviceInterestedIn,
                    needs,
                    promotion
                },
            });

            return res.status(201).json({
                message: "This valuable lead has been saved.",
            });

        } catch (error) {
            console.error("Something went wrong", error);
            return res.status(500).json({
                message: "Internal server error",
            });
        }
    },

    async getLeads(req,res){
        try{
            const leads = await prisma.qb2bLeads.findMany();
            return res.status(200).json(leads)
        }
        catch(error){
            console.error("Error fetching data ",error);
            return res.status(500).json({
                message:"Internal server error",
            });
        }
    }
}

export default qb2b;