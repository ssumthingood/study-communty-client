import SmLayout from "@components/SmLayout";
import type { NextPage } from "next";

const Login: NextPage = () => {
    return (
        <>
            <header>
                <title>LogIn</title>
            </header>
            <SmLayout children={undefined}></SmLayout>
        </>
    );
};

export default Login;

//사용안함(소셜로그인으로 대체)
