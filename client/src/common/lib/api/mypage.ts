import axios from '../axios';
import endpoints from '@/common/endpoints';
import MyIdModel from '../../model/my-page';
import MyPwModel from '../../model/my-page';

const myAPI = {
  modifyPassword: async (
    userPassword: MyPwModel
  ): Promise<MyPwModel> => {
    const { data: result } = await axios.post<MyPwModel>(
      `${endpoints.INFO_API}/modify-pw`,
      userPassword
    );
    return result;
  },
  getId: async (): Promise<MyIdModel> => {
    const { data: userid } = await axios.get<MyIdModel>(`${endpoints.INFO_API}/my-id`);

    return userid;
  },
};

export default myAPI;
