import {ReactNode} from "react";
import SearchBar from "@/components/search-bar";

export default function Layout({children}: { children: ReactNode }) {
  return (
    <div>
      <SearchBar/>
      {children}
    </div>
  );
}
