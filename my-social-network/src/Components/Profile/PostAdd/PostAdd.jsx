import './PostAdd.css'
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/Validators';
import {Textarea} from '../../common/FormsControl/FormsControl';

const maxLength10 = maxLengthCreator(10);

const PostAddForm = (props) => {
  return <>
  <form onSubmit={props.handleSubmit}>
    <Field name={"post"} component={Textarea}  validate={[required, maxLength10]} placeholder={"Post"}/>
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
      <h1>Мои посты</h1>
      <PostAddFormRedux onSubmit={addNewPost}/>
    </div>
  )
}


export default PostAdd;