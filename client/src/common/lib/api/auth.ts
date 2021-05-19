import axios from '../axios';
import endpoints from '@/common/endpoints';
import SignUpModel from '@/common/model/sign-up';
import SignInModel from '@/common/model/sign-in';

const authAPI = {
  signUp: async (
    userId: string,
    password: string,
    email: string,
  ): Promise<SignUpModel> => {
    const { data: newUser } = await axios.post<SignUpModel>(
      `${endpoints.AUTH_API}/sign-up`,
      { userId, password, email },
    );

    return newUser;
  },
  signIn: async (loginInfo: SignInModel): Promise<string> => {
    const { data: result } = await axios.post<string>(
      `${endpoints.AUTH_API}/sign-in`,
      loginInfo,
    );
    return result;
  },

  checkVerification: async (userId: string): Promise<SignInModel> => {
    const { data: result } = await axios.get<SignInModel>(
      `${endpoints.AUTH_API}/verification-check/${userId}`,
    );
    return result;
  },

  sendEmail: async (userId: string): Promise<SignInModel> => {
    const { data: result } = await axios.get<SignInModel>(
      `${endpoints.AUTH_API}/verification/send-email/${userId}`,
    );
    return result;
  },
};

export default authAPI;
