import CommentCreate from './CommentCreate.vue';
import CommentEdit from './CommentEdit.vue';
import CommentList from './CommentList.vue';
import { ShowGuesser } from '@vue-admin/core';

export default {
    list: CommentList,
    create: CommentCreate,
    edit: CommentEdit,
    show: ShowGuesser,
    icon: {
        name: 'chat-bubble'
    },
};
