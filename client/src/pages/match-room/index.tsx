import * as React from 'react';
import Settings from '../../components/settings';
import ChatRoomList from '../../components/chat-room-list';
import MakeRoom from '../../components/make-room'

const MatchPage: React.FC = () => {
    return (
      <div>
          <div>
              <Settings/>
          </div>
          <div>
              <ChatRoomList/>
          </div>
          <div>
              <MakeRoom/>
          </div>
      </div>
    );  
  }
  
  export default MatchPage;