import mainStore from "@/store/mainStore";

mainStore.state.loaded === true
const findUserPosts = (post, users) => {
    for (const user of users) {
        if (post.userId === user.id) {
            return user.name;
        }
    }
}

export default findUserPosts;