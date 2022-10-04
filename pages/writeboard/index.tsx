import Layout from "@components/Layout";
import type { NextPage } from "next";

const WriteBoard: NextPage = () => {
    return (
        <>
            <header>
                <title>Create Board</title>
            </header>
            <Layout children={undefined}></Layout>
        </>
    );
};

export default WriteBoard;

//사용안함(커뮤니티기능 X)
