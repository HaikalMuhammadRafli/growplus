import Notification from "@/Components/Widget/Notification";
import { usePage } from "@inertiajs/react";

export default function Header({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) {
    const { auth } = usePage().props as {
            auth: {
                user: {
                    id: number;
                    orangtua?: {
                        kecamatan?: string
                    }
                } | null
            }
        };

        console.log(auth);
        const kecamatan = auth.user?.orangtua?.kecamatan || '';
        console.log("Kecamatan:", kecamatan);
    return (
        <nav className="fixed top-0 z-50 w-full bg-gray-50 border-b border-gray-200">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        {/* Hamburger Menu */}
                        <button
                            onClick={toggleSidebar}
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                />
                            </svg>
                        </button>
                        <a href="/" className="flex ms-2 md:me-24">
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                                Grow+
                            </span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <Notification kecamatan={kecamatan} />
                        <div className="flex items-center ms-3">
                            <div>
                                <button
                                    type="button"
                                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    aria-expanded="false"
                                    data-dropdown-toggle="dropdown-user"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="w-8 h-8 rounded-full object-cover"
                                        src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                                        alt="user photo"
                                    />
                                </button>
                            </div>
                            <div
                                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm"
                                id="dropdown-user"
                            >
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm text-gray-900" role="none">
                                        Neil Sims
                                    </p>
                                    <p
                                        className="text-sm font-medium text-gray-900 truncate"
                                        role="none"
                                    >
                                        neil.sims@growplus.com
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            Earnings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
