import React from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import MainNav from "@/components/Header/MainNav";
import GetCategories from "@/actions/GetCategories";
import NavbarActions from "./NavbarActions";



const Header = async () => {
  const categories = await GetCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Header;
