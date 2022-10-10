import { cls } from "@libs/client/utils";
import useResize from "@libs/hooks/useResize";
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "./footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const size = useResize();
    const router = useRouter();

    return (
        <>
            <div className="w-full">
                <div className="w-full bg-black fixed top-0 flex min-w-fit">
                    <nav className="text-gray-400 px-4 h-12 py-3 text-s opacity-95 leading-6 w-fit">
                        <a className={cls(router.pathname === "/" ? "text-white" : "", "px-10 hover:text-white transition-colors")} href="/">
                            Main
                        </a>
                        <a className={cls(router.pathname.includes("/projectlists") ? "text-white" : "", "px-10 hover:text-white transition-colors")} href="/projectlists">
                            Project
                        </a>
                        <a className={cls(router.pathname.includes("/studylists") ? "text-white" : "", "px-10 hover:text-white transition-colors")} href="/studylists">
                            Study
                        </a>
                        {/* 640px 아래부터 "Welcome, 유저이름" 대신 "유저이름"만 출력되게 변경 */}
                    </nav>
                    {size.width >= 640 ? (
                        <p className="text-white px-10 h-12 py-3 text-s opacity-95 leading-6 float-right">Welcome, user!</p>
                    ) : (
                        <p className="px-10 text-white h-12 py-3 text-s opacity-95 leading-6">user</p>
                    )}
                    <a className={cls("text-white px-10 h-12 py-3 text-s opacity-95 leading-6 float-right")} href="/signup">
                        SignUp
                    </a>
                </div>
                <div className={cls("mt-12")}>{children}</div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
