import axios from '../axios';
import endpoints from '@/common/endpoints';
import InfoModel from '@/common/model/info';

const infoAPI = {
  infoEnter: async (
    userinfo: InfoModel
  ): Promise<InfoModel> => {
    const { data: result } = await axios.post<InfoModel>(
      `${endpoints.INFO_API}/info`,
      userinfo
    );
    return result;
  },
  getInfo: async (): Promise<InfoModel> => {
    const { data: Info } = await axios.get<InfoModel>(`${endpoints.INFO_API}/info`);

    return Info;
  },
};

export default infoAPI;
