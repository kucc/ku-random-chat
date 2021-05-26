import axios from '../axios';
import endpoints from '@/common/endpoints';
import SignUpModel from '@/common/model/sign-up';
import SignInModel from '@/common/model/sign-in';
import { UserModel, EnterInfoModel, ModifyPasswordModel } from '@/common/model/user';
import infoModel from '@/common/model/info';

const userAPI = {
  enterInfo: async (
    age: number,
    major: string,
    sex: string,
  ): Promise<EnterInfoModel> => {
    const { data: newInfo } = await axios.post<EnterInfoModel>(
      `${endpoints.USER_API}/enter-info`,
      { age, major, sex },
    );
    return newInfo;
  },
  getUserInfo: async (): Promise<UserModel> => {
    const { data: result } = await axios.post<UserModel>(
      `${endpoints.USER_API}/user-info`,
    );
    return result;
  },

  modifyPassword: async (userId: string, confirmPassword: string): Promise<ModifyPasswordModel> => {
    const { data: result } = await axios.post<ModifyPasswordModel>(
      `${endpoints.USER_API}/modify-password`,
        { userId, confirmPassword }
    );
    return result;
  },
};

export default userAPI;
