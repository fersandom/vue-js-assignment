import { reactive, readonly } from "vue";
import mainStore from "./mainStore";

const state = reactive({
    postsOfUsers: [],
    query: String,
    isSearch: false,
    errorMessage: "",
    isError: false
});

const methods = reactive({

    userSearch(query, users) {
        return users.filter(({ name }) =>
            name.toLowerCase().trim().includes(query.toLowerCase().trim())
        );
    },

    findPostsByUser(query, posts) {

        if (query.length < 3) {
            state.isError = true;
            state.errorMessage = "Searches must be longer than three letters"
            state.isSearch = true;
        }

        else if (query.length >= 3) {
            state.postsOfUsers = [];
            const filteredUsers = methods.userSearch(state.query, mainStore.state.users);
            if (filteredUsers.length === 0) {
                state.isError = true;
                state.errorMessage = "No posts found"
            }
            for (const post of posts) {
                for (const user of filteredUsers) {
                    if (post.userId === user.id) {
                        state.postsOfUsers.push(post);
                    }
                }
            }
            state.isSearch = true;
        }


    },

    setQueryAndSearch(query) {
        state.isSearch = false;
        state.query = query;
        state.isError = false;
        this.findPostsByUser(state.query, mainStore.state.posts)
    }
});

export default { state: readonly(state), methods };