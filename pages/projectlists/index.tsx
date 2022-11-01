import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/Layout";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const ProjectList: NextPage = () => {
    const { register, handleSubmit, reset } = useForm();
    const router = useRouter();
    const onValid = () => {
        reset();
    };
    return (
        <>
            <header>
                <title>ProjectLists</title>
            </header>
            <Layout>
                Projectlists
                <form onSubmit={handleSubmit(onValid)}>
                    <Input register={register("searchTerm", { minLength: 3, maxLength: 13 })} label="searchTerm" name="searchTerm" type="text" placeholder="검색어 입력" required />
                </form>
                <Button text={"프로젝트 개설하기"} />
            </Layout>
        </>
    );
};

export default ProjectList;
