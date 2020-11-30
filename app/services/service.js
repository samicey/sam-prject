const axios = require("axios");

//https://gorest.co.in/public-api/users

const gorestServices = {
  getUsers: async ()=> {
    users = await axios.get("https://gorest.co.in/public-api/users")
    const {data} = users;
    return data;
    
  },

  getOneUser: async (id)=> {
    user = await axios.get("https://gorest.co.in/public-api/users", {
      params: {
        id
      }
    })
    const {data} = user;
    return data;
    
  },

  filterUsers: async (name)=> {
    user = await axios.get(`https://gorest.co.in/public-api/users?name=${name}`)
    const {data} = user;
    return data;
    
  }


}

module.exports = gorestServices;