import {
  Navbar,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/react";
import HeaderAuth from "./header-auth";

export default function Header() {
  return (
    <Navbar className="bg-black">
      <NavbarBrand>
        <p className="font-bold text-inherit">OAuth App</p>
      </NavbarBrand>
      <NavbarItem>
        <HeaderAuth />
      </NavbarItem>
    </Navbar>
  );
}
