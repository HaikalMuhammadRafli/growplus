import { usePage } from "@inertiajs/react";
import { PageProps as InertiaPageProps } from "@inertiajs/core";
import { router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Layout from "@/Layouts/Admin";
import FilterDropdown from "@/Components/Widget/Filter/FilterKecamatan";
import { Pencil, Trash2 } from "lucide-react"

interface Puskesmas {
    puskesmas_id: number;
    nama: string;
    alamat: string;
    kecamatan: string;
    kota: string;
    kontak: string;
}

interface PageProps extends InertiaPageProps {
    puskesmas: Puskesmas[];
}

export default function Puskesmas() {
    const { puskesmas } = usePage<PageProps>().props;
    const [filteredPuskesmas, setFilteredPuskesmas] = useState<Puskesmas[]>([]);

    useEffect(() => setFilteredPuskesmas(puskesmas), [puskesmas]);

    const handleFilterChange = (kecamatan: string) => {
        setFilteredPuskesmas(kecamatan ? puskesmas.filter((item) => item.kecamatan.toLowerCase().includes(kecamatan.toLowerCase())) : puskesmas);
    };

    const handleDelete = (id: number) => router.delete(`/admin/puskesmas/${id}`, {
        onSuccess: () => router.reload({ only: ["puskesmas"] }),
        onError: () => alert("Gagal menghapus data."),
    });

    return (
    <Layout>
      <div className="lg:p-8 p-1 sm:ml-64 lg:mt-12 mt-8 md:mt-14">
        <div className="lg:p-8 p-4">
          <div className="flex justify-between items-center mb-5">
            <a href="/admin/puskesmas/create"><button type="button" className="px-5 py-3 text-base font-medium text-center text-white bg-wine rounded-xl hover:bg-dark-wine">Tambah Puskesmas</button></a>
            <FilterDropdown onFilterChange={handleFilterChange} />
          </div>
          <div className="relative overflow-x-auto border rounded-xl mt-5">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">ID</th>
                  <th scope="col" className="px-6 py-3">Nama</th>
                  <th scope="col" className="px-6 py-3">Alamat</th>
                  <th scope="col" className="px-6 py-3">Kecamatan</th>
                  <th scope="col" className="px-6 py-3">Kota</th>
                  <th scope="col" className="px-6 py-3">Kontak</th>
                  <th scope="col" className="px-6 py-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredPuskesmas.length === 0 ? (
                  <tr><td colSpan={7} className="text-center py-4">Tidak ada data yang ditemukan.</td></tr>
                ) : (
                  filteredPuskesmas.map((item) => (
                    <tr key={item.puskesmas_id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.puskesmas_id}</th>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.nama}</td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.alamat}</td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.kecamatan}</td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.kota}</td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.kontak}</td>
                      <td className="px-6 py-4 text-right">
                          <div className="flex justify-start gap-3">
                            <a
                              href={`/admin/puskesmas/${item.puskesmas_id}/edit`}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                              <span>Edit</span>
                            </a>
                            <button
                              onClick={() => handleDelete(item.puskesmas_id)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Delete</span>
                            </button>
                          </div>
                        </td>  
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}