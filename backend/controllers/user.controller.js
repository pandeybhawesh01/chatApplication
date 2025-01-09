import User from "../models/user.models.js";

export const getUserForSidebar = async (req, res) => {
    try {
        console.log("ok");
        const loogedInUserId = req.user._id

        const filteredUsers = await User.find({_id: {$ne: loogedInUserId}}).select("-password");

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("no");
        console.log("Error in getUserForSidebar: " ,error.message);
        res.status(500).json({error: "Internal server error"});
    }
}
