import Link from "next/link";
import { ReactNode } from "react";

export default function ParallelLayout({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  feed: ReactNode;
}) {
  return (
    <div>
      <div>
        <Link href="/parallel">Sidebar</Link>
        <Link href="/parallel/setting">Feed Setting</Link>
      </div>
      {sidebar}
      {feed}
      {children}
    </div>
  );
}
