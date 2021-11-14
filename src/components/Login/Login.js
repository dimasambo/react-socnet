import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControl/FormControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormControl/FormControl.module.css";

const LoginForm = ({handleSubmit, error}) => {
    return(
        <form onSubmit={handleSubmit}>
            {createField('email', 'email', Input, [required])}
            {createField('password', 'password', Input, [required], {type: "password"})}
            {createField(null, 'rememberMe', Input, [], {type: "checkbox"}, "remember me")}
            <div>
                {error && <div className={s.formSummaryError}>
                    {error}
                </div>}
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth)
        return <Redirect to={"/profile"} />

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);