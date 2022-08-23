const BASE_URL = "http://localhost:8080/api";

const registerUser = async (userInfo) => {
  const res = await fetch("http://localhost:8080/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  return res;
};

const signIn = async (userInfo) => {
  const res = await fetch("http://localhost:8080/api/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  return res;
};

export default { registerUser, signIn };
