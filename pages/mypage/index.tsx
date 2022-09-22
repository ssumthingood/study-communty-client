import Layout from "@components/Layout";
import type { NextPage } from "next";

const MyPage: NextPage = () => {
    return (
        <>
            <header>
                <title>MyPage : Username</title>
            </header>
            <Layout children={undefined}></Layout>
        </>
    );
};

export default MyPage;
