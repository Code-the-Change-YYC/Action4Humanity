import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <header aria-label="Site Header" className="border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button type="button" className="p-2 lg:hidden">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <Link to="/" className="flex text-white">
              A4H Icon
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end gap-8">
            <nav className=" hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
              <Link
                to="/something1"
                className="text-white block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange"
              >
                Something1
              </Link>

              <Link
                to="/something2"
                className="text-white block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange"
              >
                Something2
              </Link>

              <Link
                to="/something3"
                className="text-white block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange"
              >
                Something3
              </Link>

              <Link
                to="/something4"
                className="text-white block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange"
              >
                Something4
              </Link>
            </nav>

            <div className="flex items-center">
              <div className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
                <span>
                  <Link
                    to="/something5"
                    className="block border-b-4 border-transparent p-6 hover:border-orange"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="sr-only"> Something5 </span>
                  </Link>
                </span>

                <span>
                  <Link
                    to="/something6"
                    className="block border-b-4 border-transparent p-6 hover:border-orange"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <span className="sr-only"> Something6 </span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
