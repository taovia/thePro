<template>
<div class="container">
  <Input @submit="addNewComment" />
  <div class="divider"></div>
  <div class="comments" v-for="comment in comments" :key="comment.id">
    <Item :username="comment.username" :avatar="comment.avatar" :time="comment.time" :content="comment.content" />
    <Reply v-if="comment.replies">
      <Item v-for="reply in comment.replies" :key="reply.id" :username="reply.username" :avatar="reply.avatar" :time="reply.time" :content="reply.content" />
    </Reply>
    <ReplyInput @submit="addReply($event, comment.id)" />
  </div>
</div>
</template>

<script setup>
import Input from './comment/Input.vue'
import Item from './comment/Item.vue'
import Reply from './comment/Reply.vue'
import ReplyInput from './comment/ReplyInput.vue'

import avatar0 from '../assets/avatar/avatar_0.png'
import avatar1 from '../assets/avatar/avatar_1.png'
import avatar2 from '../assets/avatar/avatar_2.png'
import avatar3 from '../assets/avatar/avatar_3.png'

import {
  ref
} from 'vue'

let rid = ref(4);

const comments = ref([{
  id: 1,
  username: "ZoeMark",
  avatar: avatar1,
  time: "2 hours ago",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  replies: [{
      id: 2,
      username: "Teo",
      avatar: avatar2,
      time: "2 hours ago",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      username: "Heoker",
      avatar: avatar3,
      time: "2 hours ago",
      content: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
  ]
}]);

const createNewComment = (content) => {
  return {
    id: rid.value++,
    username: "TAOVIA",
    avatar: avatar0,
    time: "1 sec ago",
    content,
  };
};

const addNewComment = (content) => {
  const newComment = createNewComment(content);
  comments.value.push(newComment);
};

const addReply = (content, id) => {
  const reply = createNewComment(content);
  let comment = comments.value.find((comment) => comment.id === id);
  if (comment.replies) {
    comment.replies.push(reply);
  } else {
    comment.replies = [reply];
  }
};
</script>

<style scoped>
.container {
  margin: 20px 0;
}

.divider {
  width: 100%;
  height: 1px;
  background: var(--color-grey-1);
  margin: 20px 0;
}

.comments {
  margin-bottom: 20px;
}
</style>
