import { cls } from "@libs/client/utils";
import useResize from "@libs/hooks/useResize";
import MiniFooter from "./minifooter";

interface LayoutProps {
    children: React.ReactNode;
}

export default function SmLayout({ children }: LayoutProps) {
    const size = useResize();
    return (
        <>
            <div className="w-screen h-3 bg-purple-500" />
            {children}
            <MiniFooter />
        </>
    );
}
