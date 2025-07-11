import { sendVerificationMail } from "../../middleware/authenication.middleware.js";

let ogOTP = null;

export const sendOTP = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Email is required." });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    ogOTP = otp; 
    // console.log("Generated OTP:", otp);

    try {
        await sendVerificationMail(email, otp);
        return res.status(200).json({ message: "OTP sent to email." });
    } catch (error) {
        return res.status(500).json({ message: "Error sending OTP." });
    }
};

export const verifyOTP = (req, res) => {
    const { otp } = req.body;
    // console.log("Received OTP:", otp);
    // console.log("Stored OTP:", ogOTP);

    if (!otp) {
        return res.status(400).json({ message: "OTP is required." });
    }

    if (otp === ogOTP) {
        return res.status(200).json({ message: "OTP is valid." });
    } else {
        return res.status(400).json({ message: "Invalid OTP." });
    }
};
