export const GetUserInfo = () => {
  const authData = JSON.parse(localStorage.getItem("auth")) || {};
  const { username, profilePhoto, userID, isAuth } = authData;
  return { username, profilePhoto, userID, isAuth };
};
