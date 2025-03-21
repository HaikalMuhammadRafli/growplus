import Layout from "@/Layouts/Admin";
export default function Index() {
    return(
        <Layout>
            <div className="lg:p-8 p-1 sm:ml-64 lg:mt-12 mt-8 md:mt-14">
                <div className="lg:p-8 p-4">    
                    <div className="grid grid-cols-3 space-x-3">
                        <div>
                            <a href="#" className="block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-100">
                                <h5 className="mb-2 text-md font-medium tracking-tight text-gray-800">Jumlah Puskesmas</h5>
                                <p className="text-3xl font-bold  text-gray-900">1000</p>
                            </a>
                        </div>
                        <div>
                            <a href="#" className="block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-100">
                                <h5 className="mb-2 text-md font-medium tracking-tight text-gray-800">Jumlah Orang Tua</h5>
                                <p className="text-3xl font-bold  text-gray-900">1000</p>
                            </a>
                        </div>
                        <div>
                            <a href="#" className="block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-100">
                                <h5 className="mb-2 text-md font-medium tracking-tight text-gray-800">Jumlah Tantangan</h5>
                                <p className="text-3xl font-bold  text-gray-900">1000</p>
                            </a>
                        </div>
                    </div>
                    <hr className="h-px my-8 bg-gray-200 border-0" />
                    <h1 className="text-2xl font-bold">Daftar Pengguna</h1>
                    <div className="relative overflow-x-auto border rounded-xl mt-5">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Username
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nama Lengkap
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Disini
                                    </th>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Disini
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Disini
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Disini
                                    </td>
                                    <td className="px-6 py-4 text-right flex gap-2">
                                        <a href="#" className="font-medium text-wine hover:underline">Edit</a>
                                        │
                                        <a href="#" className="font-medium text-red-500 hover:underline">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </Layout>
    );
}