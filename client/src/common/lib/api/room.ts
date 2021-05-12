import endpoints from '@/common/endpoints';
import Room from '@/common/model/room';
import axios from '../axios';

const roomAPI = {
  createNewRoom: async (roomTitle: string): Promise<Room> => {
    const { data: newRoom } = await axios.post<Room>(
      `${endpoints.ROOM}/create-room`,
      { roomTitle },
    );

    return newRoom;
  },

  getRoomList: async (): Promise<Room[]> => {
    const { data: roomLIst } = await axios.get<Room[]>(`${endpoints.ROOM}`);

    return roomLIst;
  },
};

export default roomAPI;
