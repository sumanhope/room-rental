export const GetUserInfo = () => {
  const authData = JSON.parse(localStorage.getItem("auth")) || {};
  const { username, email, uid, isAuth } = authData;
  return { username, email, uid, isAuth };
};
