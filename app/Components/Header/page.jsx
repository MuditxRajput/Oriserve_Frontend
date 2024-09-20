import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="bg-gradient-to-r from-red-500 via-orange-400 to-pink-500 h-2"></div>
      <nav className="flex items-center  py-4 bg-white border-b border-gray-300 ">
        <div className="text-xl ml-10 mr-4">
          <span role="img" aria-label="heart">🖤</span>
        </div>
        <ul className="flex space-x-7 text-sm font-semibold ml-1">
          <li>
            <Link href="/pro">
              <p className="hover:text-slate-500">Pro</p>
            </Link>
          </li>
          <li>
            <Link href="/teams">
              <p className="hover:text-slate-500">Teams</p>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <p className="hover:text-slate-500">Pricing</p>
            </Link>
          </li>
          <li>
            <Link href="/documentation">
              <p className="hover:text-slate-500">Documentation</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header