import axios from '../axios';
import endpoints from '@/common/endpoints';
import MyPwModel from '../../model/my-page';

const myAPI = {
  modifyPassword: async (
    userPassword: MyPwModel
  ): Promise<MyPwModel> => {
    const { data: result } = await axios.post<MyPwModel>(
      `${endpoints.MY_API}/modify-pw`,
      userPassword
    );
    return result;
  },
  getId: async (): Promise<string> => {
    const { data: userid } = await axios.get<string>(`${endpoints.MY_API}/my-id`);

    return userid;
  },
};

export default myAPI;
