import "../Css/Login.css"

const Login = () => {
    return (
        <div className="login">
            <form>

                <h2>Admin Login</h2>

                <input type="text" name="username" class="text-field" placeholder="Username" />
                <input type="password" name="password" class="text-field" placeholder="Password" />

                <a href=""><input type="button" class="button" value="Log In" /></a>

            </form>
        </div>
    )
}

export default Login;