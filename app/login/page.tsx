import "./login.css";
import MyButton from "@/components/Button/Button";
import Myinput from "@/components/Input/Input";
import ButtonLogin from "@/components/ButtonLogin/Buttonlogin";

export default function LoginPage() {
    return (
        <div className="container">

            <h2>Scesse sua Conta</h2>

            <div className="forms"> 

                <p>Email</p>  
                <Myinput type="text" placeholder="Insira seu email Profisional" />

                <p>Senha</p>
                <Myinput type="password" placeholder="Use ao menos 8 carecteres" />

                <span>Esqueceu a senha?</span>
                <MyButton>Acessar</MyButton>
            </div>

            <p>----------------- ou -----------------</p>

            <div className="cardOu">
                <ButtonLogin>Entre com Google</ButtonLogin>
                <ButtonLogin>Entrar com certificado digital</ButtonLogin>
            </div>

            <samp>Não tem conta? <a href="#">Registre-se grátis</a></samp>
        </div>
    )
}
