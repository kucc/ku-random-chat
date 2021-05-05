import axios from "../axios";
import endpoints from "@/common/endpoints";
import SignUpModel from "@/common/model/sign-up";

const authAPI = {
  signUp: async (
    userId: string,
    password: string,
    email: string
  ): Promise<SignUpModel> => {
    const { data: newUser } = await axios.post<SignUpModel>(
      `${endpoints.AUTH_API}/sign-up`,
      { userId, password, email }
    );

    return newUser;
  },
};

export default authAPI;
