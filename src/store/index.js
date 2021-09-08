import Vuex from "vuex";
import Vue from "vue";

Vue.useAttrs(Vuex);

const store = new Vuex.Store({
  state: {
    chatList: [
      {
        id: 1,
        lastMessage: "채팅 메시지1",
        new: 1,
      },
      {
        id: 2,
        lastMessage: "채팅 메시지1",
        new: 2,
      },
      {
        id: 3,
        lastMessage: "채팅 메시지1",
        new: 1,
      },
      {
        id: 4,
        lastMessage: "채팅 메시지1",
        new: 5,
      },
    ],
  },
  mutation: {
    readChat(state, chat) {
      state.chatList.forEach((item) => {
        if (item.id === chat.id) {
          item.new = 0;
        }
      });
    },
  },
  actions: {
    readChat(context, chat) {
      context.commit("readChat", chat);
    },
  },
});

export default store;
