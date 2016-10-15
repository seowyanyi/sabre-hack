import { Mongo } from 'meteor/mongo';
import './chatbot.js'
export const Messages = new Mongo.Collection('messages');
