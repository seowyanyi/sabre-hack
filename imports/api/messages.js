import { Mongo } from 'meteor/mongo';
import './chatbot.js'
export const Messages = new Mongo.Collection('messages');

Messages.after.insert(function (userId, doc) {
  Meteor.chatbot.executeSentence(doc.text);
});