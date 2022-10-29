import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/Layout";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";

const StudyList: NextPage = () => {
    const { register, handleSubmit, reset } = useForm();

    return (
        <>
            <header>
                <title>StudyList</title>
            </header>
            <Layout>
                Studylists
                <Input register={register("searchTerm", { minLength: 3, maxLength: 13 })} label="searchTerm" name="searchTerm" type="text" placeholder="검색어 입력" required />
                <Button text={"스터디 개설"} />
            </Layout>
        </>
    );
};

export default StudyList;
