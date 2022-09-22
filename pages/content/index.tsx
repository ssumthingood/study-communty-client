import Layout from "@components/Layout";
import type { NextPage } from "next";

const Content: NextPage = () => {
    return (
        <>
            <header>
                <title>ContentName</title>
            </header>
            <Layout children={undefined}></Layout>
        </>
    );
};

export default Content;
