import { reactive, readonly } from "vue";
import mainStore from "./mainStore";

const state = reactive({
    postsOfUsers: [],
    query: String
});

const methods = reactive({
    userSearch(query, users) {
        return users.filter(({ name }) =>
            name.toLowerCase().trim().includes(query.toLowerCase().trim())
        );
    },

    findPostsByUser(query, posts) {
        if (mainStore.state.loaded === false) {
            mainStore.methods.fetchAll();
        }
        this.setQuery(query)
        state.postsOfUsers = [];
        const filteredUsers = methods.userSearch(state.query, mainStore.state.users);
        for (const post of posts) {
            for (const user of filteredUsers) {
                if (post.userId === user.id) {
                    state.postsOfUsers.push(post);
                }
            }
        }
    },

    setQuery(query) {
        state.query = query;
    }
});

export default { state: readonly(state), methods };