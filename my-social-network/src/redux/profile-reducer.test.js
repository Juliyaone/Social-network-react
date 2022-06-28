import profileReducer, { deletePost, addPostActionCreater } from './profile-reducer';

let state = {
  posts: [
    {id: 5, post: 'js coool!', likescount: 0},
    {id: 6, post: 'react amazing!', likescount: 30},
  ]
}

it('state should be length incremented', () => {
  let action = addPostActionCreater('Jest reliable!');
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it('meaasge should be Jest reliable!', () => {
  let message = 'Jest reliable!';
  let action = addPostActionCreater('Jest reliable!');
  let newState = profileReducer(state, action);
  expect(newState.posts[2].post).toBe(message);
});

it('after deleting length should decrement', () => {
  let action = deletePost(5);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});

it(`after deleting length should't decrement if id incorect`, () => {
  let action = deletePost(764576);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});

