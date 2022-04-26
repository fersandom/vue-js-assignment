import { reactive, readonly } from "vue";
import axios from "axios";

const state = reactive({
    loaded: false,
    posts: Array,
    users: Array,
    comments: Array,
    post: Object,
    user:Object,
    filteredComments:Array,
});

const methods = {
    async fetchAll() {
        await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                state.posts = response.data;
                console.log(state.posts);
            });

        await axios
            .get(`https://jsonplaceholder.typicode.com/users/`)
            .then((response) => {
                state.users = response.data;
                console.log(state.users);
            });

        await axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                state.comments = response.data;
                console.log(state.comments);
            });
            state.loaded = true
    },

    async fetchPost(id) {
        state.loaded = false;
        await axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                state.post = response.data;
            });
        console.log(state.post);
    },

    async fetchCommentsOfPost(id){
        await axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => {
                state.filteredComments = response.data;
                console.log(state.filteredComments);

            });
    },

    async fetchUser(id){
        await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                state.users= response.data;
                state.user = state.users.find(user => user.id === id);
                console.log(state.user);

            });
    },

    
};

export default { state: readonly(state), methods };