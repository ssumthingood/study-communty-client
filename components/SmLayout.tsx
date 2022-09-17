import { cls } from "@libs/client/utils";
import useResize from "@libs/hooks/useResize";

interface LayoutProps {
    children: React.ReactNode;
}

export default function SmLayout({ children }: LayoutProps) {
    const size = useResize();
    return <>{children}</>;
}
