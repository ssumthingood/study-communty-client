import { cls } from "@libs/client/utils";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return <>{children}</>;
}
