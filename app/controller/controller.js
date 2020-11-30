const services = require("../services/service");

exports.getAllUsers = async (req, res) =>{
   try {
     const users = await services.getUsers();
    return res.status(200).json({status: "success", data: users})
   } catch (error) {
     return res.status(500).json({status: "failure", error: "service unavailable"})
   }
}

exports.getOneUsers = async (req, res) =>{
  try {
    const { id } = req.params
    const users = await services.getOneUser(id);
   return res.status(200).json({status: "success", data: users})
  } catch (error) {
    return res.status(500).json({status: "failure", error: "service unavailable"})
  }
}

exports.filterUsers = async (req, res) =>{
  try {
    const { name } = req.params
    const users = await services.filterUsers(name);
   return res.status(200).json({status: "success", data: users})
  } catch (error) {
    return res.status(500).json({status: "failure", error: "service unavailable"})
  }
}

exports.welcome = async (req, res) =>{
  res.status(200).json({message: "Welcome to this api"})
}