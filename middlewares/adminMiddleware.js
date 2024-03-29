import userModel from "../models/userModel.js";

export default async function(req, res, next) {
  try {
    const user = await userModel.findById(req.body.userId);
    
    if (user?.role !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Authentication Failed",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      message: "Authentication Failed for ADMIN API",
      error,
    });
  }
}
