import userSchema from "../models/User.js"

export const getUserProfile = async (req, res, next) => {
  try {
    const user = await userSchema.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUserProfile = async (req, res, next) => {
  try {
    const updatedUser = await userSchema.findByIdAndUpdate(
      req.user.id,
      {
        ...req.body,
        profilePicture: req.file?.path
      },
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};
