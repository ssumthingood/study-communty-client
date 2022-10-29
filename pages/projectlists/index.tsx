import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/Layout";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";

const ProjectList: NextPage = () => {
    const { register, handleSubmit, reset } = useForm();
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
                <Input register={register("searchTerm", { minLength: 3, maxLength: 13 })} label="searchTerm" name="searchTerm" type="text" placeholder="검색어 입력" required />
                <Button text={"프로젝트 개설"} />
            </Layout>
        </>
    );
};

export default ProjectList;
