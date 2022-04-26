import { reactive, readonly } from "vue";
import axios from "axios";

const state = reactive({
    loaded: false,
    posts: Array,
    users: Array,
    comments: Array,
    post: Object,
    user: Object,
    filteredComments: Array,
    postsUrl: "https://jsonplaceholder.typicode.com/posts",
    usersUrl: `https://jsonplaceholder.typicode.com/users/`,
    commentsUrl: "https://jsonplaceholder.typicode.com/comments",
    singlePostUrl: `https://jsonplaceholder.typicode.com/posts/`,
    commentsOfPostUrl: `https://jsonplaceholder.typicode.com/posts/`
});

const methods = {
    async fetchAll() {
        await axios
            .get(state.postsUrl)
            .then((response) => {
                state.posts = response.data;
            });

        await axios
            .get(state.usersUrl)
            .then((response) => {
                state.users = response.data;
            });

        await axios
            .get(state.commentsUrl)
            .then((response) => {
                state.comments = response.data;
            });
        state.loaded = true
    },


    async fetchPost(id) {
        state.loaded = false;
        await axios
            .get(state.singlePostUrl + `${id}`)
            .then((response) => {
                state.post = response.data;
            });
    },

    async fetchCommentsOfPost(id) {
        await axios
            .get(state.commentsOfPostUrl + `${id}/comments`)
            .then((response) => {
                state.filteredComments = response.data;

            });
    },

    async fetchUser(id) {
        await axios
            .get(state.usersUrl)
            .then((response) => {
                state.users = response.data;
                state.user = state.users.find(user => user.id === id);

            });
    },


};

export default { state: readonly(state), methods };