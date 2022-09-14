import { cls } from "@libs/utils";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return <>{children}</>;
}
