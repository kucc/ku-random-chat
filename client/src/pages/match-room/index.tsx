import * as React from 'react';
import Settings from '../../components/settings';
import chatRoomList from '../../components/chat-room-list';
import makeRoom from '../../components/make-room'

const MatchPage: React.FC = () => {
    return (
      <div>
          <div>
              <Settings/>
          </div>
          <div>
              <chatRoomList/>
          </div>
          <div>
              <makeRoom/>
          </div>
      </div>
    );  
  }
  
  export default MatchPage;