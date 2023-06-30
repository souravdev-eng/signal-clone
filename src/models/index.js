// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, ChatRooms, Users, UsersChatRooms } = initSchema(schema);

export {
  Message,
  ChatRooms,
  Users,
  UsersChatRooms
};