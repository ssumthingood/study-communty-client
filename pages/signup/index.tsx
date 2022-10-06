import SmLayout from "@components/SmLayout";
import type { NextPage } from "next";

const Signup: NextPage = () => {
    return (
        <>
            <header>
                <title>SignUp</title>
            </header>
            <SmLayout>
                <div className="grid text-center place-items-center m-auto w-fit h-[calc(100vh-5rem)]">
                    welcome to our community!
                    <br />
                    Signup with Google
                    <br />
                    Signup with Kakao
                    <br />
                    Signup with Naver
                    <br />
                </div>
            </SmLayout>
        </>
    );
};

export default Signup;
