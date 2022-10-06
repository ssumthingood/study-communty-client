import Layout from "@components/Layout";
import TextArea from "@components/textarea";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";

const Home: NextPage = () => {
    const { register, handleSubmit, reset } = useForm();

    return (
        <>
            <header>
                <title>StudyCommunity</title>
            </header>
            <Layout>Main</Layout>
        </>
    );
};

export default Home;
