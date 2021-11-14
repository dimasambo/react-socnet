import profileReducer, {addPostCreateAction, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi! Its my first post!', numberOfLike: 20},
        {id: 2, message: 'Holla! Im here at the first time)', numberOfLike: ''},
        {id: 3, message: 'Wow! Thats great soc net!', numberOfLike: 34},
        {id: 4, message: 'Guys! How are you?', numberOfLike: 1},
        {id: 5, message: 'Help! I cant understand what to do here(((', numberOfLike: 133}
    ]
}

it("length of post should be incremented", () => {
    let action = addPostCreateAction("New Post");

    let newSate = profileReducer(state, action);

    expect(newSate.posts.length).toBe(6);
});

it("message of post should be correct", () => {
    let action = addPostCreateAction("New Post");

    let newSate = profileReducer(state, action);

    expect(newSate.posts[5].message).toBe("New Post");
});

it("length of post should be decrement", () => {
    let action = deletePost(5);

    let newSate = profileReducer(state, action);

    expect(newSate.posts.length).toBe(4);
});

it("length of post shouldn`t be changed, if id is incorrect", () => {
    let action = deletePost(1000);

    let newSate = profileReducer(state, action);

    expect(newSate.posts.length).toBe(5);
});