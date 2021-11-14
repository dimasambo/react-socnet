import React, {useEffect, useState} from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControl/FormControl";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)

const Posts = React.memo( (props) => {
    let postsElements = props.posts
        .map(p => <Post numberOfLike={p.numberOfLike} message={p.message} key={p.id}/>);

    let addNewPost = (value) => {
        props.addPost(value.newPostText);
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddPostFormRedux onSubmit={addNewPost}/>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
})

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength10]} name={"newPostText"}
                       placeholder={'Enter post text'}/>
            </div>
            <div>
                <button>Add text</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm);

export default Posts;