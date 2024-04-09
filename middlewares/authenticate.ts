import jwtDecode from "jwt-decode";
import moment from "moment";

const authenticate = (cookies: any) => {
  if (cookies.get("accessToken")) {
    let accessToken = cookies.get("accessToken").value;

    let decodedToken: any = null;
    try {
      decodedToken = jwtDecode(accessToken);
    } catch (error) {
      cookies.set(
        "toast",
        JSON.stringify({
          message: "Your token is not valid!",
          status: "error",
        })
      );

      return false;
    }

    if (moment().unix() * 1000 < decodedToken.exp * 1000) {
      return true;
    }
  }

  return false;
};

export default authenticate;
