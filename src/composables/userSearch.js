const userSearch = (query, users) => {
    return (users.filter(({ name }) => name.includes(query)));
}

export default userSearch;