import Footer from "./Footer";
import Header  from "./Header";
import { Container } from "@mui/material";
import Link from "next/link";

export default function Layout({children}) {
  return (
    <>
        <Header title="Andres Toledo">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/admin">ADMIN</Link>
        </Header>
        <Container fixed>
            <main>{children}</main>
        </Container>
        <Footer />
    </>
  )
}
