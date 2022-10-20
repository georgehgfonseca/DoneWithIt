import client from "./client";

const endpoint = "/users";

const getUsers = () => client.get(endpoint);

const addUsers = (user: any) => {
  console.log(user)
  return client.post(endpoint, {"name": user.name, "email": user.email, "password": user.password, "id": "5"})
};

export default {
  getUsers,
  addUsers,
};
