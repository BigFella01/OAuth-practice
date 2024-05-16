import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar className="bg-black">
      <NavbarBrand>
        <p className="font-bold text-inherit">OAuth App</p>
      </NavbarBrand>
    </Navbar>
  );
}
