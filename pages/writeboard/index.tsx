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
