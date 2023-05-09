import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <ul className="flex space-x-5">
        <Link href="/home">
          <li>Home</li>
        </Link>

        <Link href="/about">
          <li>About</li>
        </Link>

        <Link href="/blog">
          <li>Blog</li>
        </Link>

        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </>
  );
};

export default Navbar;
