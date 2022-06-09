import './PostAdd.css'
import {Field, reduxForm} from 'redux-form';

const PostAddForm = (props) => {
  return <>
  <form onSubmit={props.handleSubmit}>
    <Field name={"post"} component={'textarea'} />
    <button type='submit'>Добавить</button>
  </form>
  </>
}

const PostAddFormRedux = reduxForm({form: 'post'})(PostAddForm);


const PostAdd = (props) => {

  const addNewPost = (values) => {
    props.addPost(values.post);
  }

  return (
    <div>
      <h1>Добавь пост</h1>
      <PostAddFormRedux onSubmit={addNewPost}/>
    </div>
  )
}


export default PostAdd;