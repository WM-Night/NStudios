import { ChannelMap, MemberMap } from './';

export interface AppState {
  loading?: boolean;
  name?: string;
  channels: {
    keys: [string];
    data: ChannelMap;
  };
  members: {
    keys: [string];
    data: MemberMap;
  };
}
