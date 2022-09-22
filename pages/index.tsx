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
            <Layout>
                <TextArea register={register("name", { minLength: 3, maxLength: 13 })} />
            </Layout>
        </>
    );
};

export default Home;
