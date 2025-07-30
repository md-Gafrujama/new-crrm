import express from "express";
import prisma from "../../prisma/prismaClient.js";
import { uploadToCloudinary } from "../../utilis/fileUpload.js";

const employee = {
    async addEmployee(req, res) {
        try {
            const user = req.user;

            if (!user || user.userType !== 'admin') {
                return res.status(403).json({ message: 'Access denied. Admins only.' });
            }

            const {
                firstName,
                lastName,
                username,
                email,
                phone,
                whatsappphone,
                joiningdate,
                status,
                department,
                role,
                profilePhoto,
            } = req.body;

            const existingEmployee = await prisma.employee.findFirst({
                where: {
                    OR: [
                        { username },
                        { email }
                    ]
                }
            });

            if (existingEmployee) {
                return res.status(409).json({
                    message: "Employee already exists",
                    conflict: existingEmployee.username === username ? "username"
                        : existingEmployee.email === email ? "email"
                            : "phone"
                });
            }

            const photoUrl = req.cloudinaryUrl || profilePhoto;

            const employeeData = {
                firstName,
                lastName,
                username,
                email,
                phoneNumber: phone,
                whatsAppPhone: whatsappphone || null,
                joiningDate: new Date(joiningdate),
                status,
                department,
                role,
                photo: photoUrl,
            };

            const employee = await prisma.employee.create({
                data: employeeData
            });

            return res.status(201).json({
                message: "Employee added successfully",
                employee: {
                    id: employee.id,
                    username: employee.username,
                    email: employee.email,
                    department: employee.department,
                    role: employee.role,
                    photo: employee.photo,
                    joiningDate: employee.joiningDate,
                    createdAt: employee.createdAt
                }
            });

        } catch (error) {
            console.error("Add employee error:", error);
            return res.status(500).json({
                message: "Internal server error",
                error: process.env.NODE_ENV === "development" ? error.message : undefined
            });
        }
    },

    async getEmployee(req, res) {
        try {
            const employees = await prisma.employee.findMany();
            return res.status(200).json({ employees });
        } catch (error) {
            console.error("Get employee error:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    },

    async getSale(req, res) {
        try {
            const employeeSale = await prisma.employee.findMany({where :{department :"Sale"}});
            return res.status(200).json({ employeeSale });
        } catch (error) {
            console.error("Get employee error:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    },

    async getMarketing(req, res) {
        try {
            const employeeMarketing = await prisma.employee.findMany({ where:{department:"Marketing"}});
            return res.status(200).json({ employeeMarketing });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    },

    async getSaas(req, res) {
        try {
            const employeeSaas = await prisma.employee.findMany({where:{department:"SaaS"}});
            return res.status(200).json({ employeeSaas });
        } catch (error) {
            console.error("Get employee error:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    },

    async getTechnologies(req, res) {
        try {
            const employeeTech = await prisma.employee.findMany({where:{department:"Technology"}});
            return res.status(200).json({ employeeTech });
        } catch (error) {
            console.error("Get employee error:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    },

    async delEmployee(req, res) {
        try {
            const user = req.user;

            if (!user || user.userType !== 'admin') {
                return res.status(403).json({ message: 'Access denied. Admins only.' });
            }

            const { id } = req.params;

            const existingEmployee = await prisma.employee.findUnique({ where: { id: id } });

            if (!existingEmployee) {
                return res.status(404).json({ message: "Employee not found" });
            }

            await prisma.employee.delete({ where: { id: id } });

            return res.status(200).json({ message: "Employee deleted successfully" });

        } catch (error) {
            console.error("Delete employee error:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    },

    async updateEmployee(req, res) {
        try {
            const user = req.user;

            if (!user || user.userType !== 'admin') {
                return res.status(403).json({ message: 'Access denied. Admins only.' });
            }

            const { id } = req.params;

            const existingEmployee = await prisma.employee.findUnique({ where: { id: parseInt(id) } });

            if (!existingEmployee) {
                return res.status(404).json({ message: "Employee not found" });
            }

            const {
                firstName,
                lastName,
                username,
                email,
                phone,
                whatsappphone,
                joiningdate,
                status,
                department,
                role,
                profilePhoto
            } = req.body;

            const updatedData = {
                firstName,
                lastName,
                username,
                email,
                phoneNumber: phone,
                whatsAppPhone: whatsappphone || null,
                joiningDate: joiningdate ? new Date(joiningdate) : undefined,
                status,
                department,
                role,
                photo: req.cloudinaryUrl || profilePhoto || existingEmployee.photo
            };

            Object.keys(updatedData).forEach(key => updatedData[key] === undefined && delete updatedData[key]);

            const updatedEmployee = await prisma.employee.update({
                where: { id: parseInt(id) },
                data: updatedData
            });

            return res.status(200).json({
                message: "Employee updated successfully",
                employee: updatedEmployee
            });

        } catch (error) {
            console.error("Update employee error:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
};

export default employee;
