import Link from "next/link";

const MainNav = () => {
  return (
    <div className="flex justify-between gap-2">
      <div className="flex items-center gap-2">
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/users">Users</Link>
      </div>
      <div className="flex items-center gap-2">
        <Link href="/">Login</Link>
        <Link href="/">Logout</Link>
      </div>
    </div>
  );
};

export default MainNav;
