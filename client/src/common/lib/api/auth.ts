import axios from '../axios';
import endpoints from '@/common/endpoints';
import SignUpModel from '@/common/model/sign-up';
import SignInModel from '@/common/model/sign-in';

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
  signIn: async (loginInfo: SignInModel) => {
    await axios.post<SignInModel>(`${endpoints.AUTH_API}/sign-in`, loginInfo);
  },
};

export default authAPI;
