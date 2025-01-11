import axios from "axios";
import userModel from "../Models/UserModel.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;

        if (!userId || !prompt) {
            return res.json({
                success: false,
                message: "Details missing",
            });
        }

        const user = await userModel.findById(userId);
        if (!user) {
            return res.json({
                success: false,
                message: "User not found",
            });
        }

        if (user.creditBalance <= 0) {
            return res.json({
                success: false,
                message: "No credits available",
                credits: user.creditBalance,
            });
        }

        const formData = new FormData();
        formData.append("prompt", prompt);

        const { data } = await axios.post(
            "https://clipdrop-api.co/text-to-image/v1",
            formData,
            {
                headers: {
                    ...formData.getHeaders(),
                    "x-api-key": process.env.CLIPDROP_API,
                },
                responseType: "arraybuffer",
            }
        );

        const base64Image = Buffer.from(data, "binary").toString("base64");
        const resultImage = `data:image/png;base64,${base64Image}`;

        await userModel.findByIdAndUpdate(user._id, {
            creditBalance: user.creditBalance - 1,
        });

        return res.json({
            success: true,
            message: "Image generated",
            creditBalance: user.creditBalance - 1,
            resultImage,
        });
    } catch (error) {
        console.error(error);
        return res.json({
            success: false,
            message: error.message,
        });
    }
};
