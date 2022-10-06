import { cls } from "@libs/client/utils";
import useResize from "@libs/hooks/useResize";
import { useRouter } from "next/router";
import Footer from "./footer";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const size = useResize();
    const router = useRouter();

    return (
        <>
            <div>
                <nav className="bg-black text-gray-400 fixed top-0 w-full px-4 h-12 py-3 flex text-s opacity-95 leading-6">
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
                    {/* {size.width >= 640 ? <p>Welcome, {user}!</p> : <p>{user}</p>}
                <button onClick={logOut}>Logout</button> */}
                </nav>
                <div className={cls("mt-12")}>{children}</div>
            </div>
            <Footer />
        </>
    );
}
