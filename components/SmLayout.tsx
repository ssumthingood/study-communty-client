import { cls } from "@libs/client/utils";

interface LayoutProps {
    children: React.ReactNode;
}

export default function SmLayout({ children }: LayoutProps) {
    return <>{children}</>;
}
