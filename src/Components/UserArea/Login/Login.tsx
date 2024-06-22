import { useForm } from "react-hook-form";
import "./Login.css";
import { notify } from "../../../Utils/Notify";
import { userService } from "../../../Services/UserService";
import { useNavigate } from "react-router-dom";
import { CredentialsModel } from "../../../Models/CredentialModel";
import { useTitle } from "../../../Utils/UseTitle";

export function Login(): JSX.Element {

    useTitle("Login")

    const { register, handleSubmit } = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send({ email, password }: CredentialsModel) {
        try{
            await userService.login({ email, password });
            notify.success("Welcome Back!");
            navigate("/home");

        }
        catch(error: any){
            notify.error(error);
        }
    }

    return (
        <div className="Login">

            <form onSubmit={handleSubmit(send)}>
 
                <label>Email:</label>
                <input type="email" {...register("email")}/>

                <label>Password:</label>
                <input type="password" {...register("password")}/>

                <button>Login</button>

            </form>
			
        </div>
    );
}
