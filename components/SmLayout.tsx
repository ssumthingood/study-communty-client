import { cls } from "@libs/client/utils";
import useResize from "@libs/hooks/useResize";
import MiniFooter from "./minifooter";

interface LayoutProps {
    children: React.ReactNode;
}

export default function SmLayout({ children }: LayoutProps) {
    const size = useResize();
    return (
        <div className="h-screen">
            <div className="w-screen h-10 bg-black text-center">
                <a className="leading-10 text-white" href="/">
                    Main
                </a>
            </div>
            {children}
            <MiniFooter />
        </div>
    );
}
