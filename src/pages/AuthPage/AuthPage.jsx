import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({setUser}) {
    return (
        <main className="callout primary">
            <h1>Welcome to the Two-Minute-Rule!</h1>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} />
        </main>
    );
}