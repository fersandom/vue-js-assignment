import mainStore from '@/store/mainStore';
import userSearch from './userSearch'

const findPostsByUser = (query, posts) => {

    let postsOfUsers = [];
    const filteredUsers= userSearch(query, mainStore.state.users);
    for (const post of posts) {
        for (const user of filteredUsers) {
            if (post.userId === user.id) {
                postsOfUsers.push(post)
            }
        }
    }
    return postsOfUsers;
}

export default findPostsByUser;