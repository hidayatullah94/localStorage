import React, { useEffect, useState } from "react";
import { Cards } from "../component/Cards";

export const DetailGaji = () => {
  const data = JSON.parse(localStorage.getItem("profil"));
  const [nip, setNip] = useState("");
  const [nama, setNama] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [level, setLevel] = useState("");
  const [tanggal, setTanggal] = useState(new Date());
  const [gapok, setGapok] = useState();
  const [hadir, setHadir] = useState(0);
  const [tidakhadir, setTidakhadir] = useState(22);
  const [pottidak, setPottidak] = useState(0);
  const [tunjangan, setTunjangan] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [bpjs, setBpjs] = useState(0);
  const [kotor, setKotor] = useState(0);
  const [bersih, setBersih] = useState(0);

  useEffect(() => {
    setTidakhadir(22 - parseInt(hadir));
    setPottidak(parseInt(tidakhadir) * parseInt(250000));
    setBpjs((gapok * 3) / 100);
    setKotor(parseInt(gapok) + parseInt(tunjangan) + parseInt(bonus));
    setBersih(kotor - bpjs - pottidak);
  }, [
    hadir,
    tidakhadir,
    gapok,
    tunjangan,
    bonus,
    kotor,
    pottidak,
    bpjs,
    tanggal,
    nama,
    nip,
    level,
    jabatan,
  ]);

  const Submits = (e) => {
    const users = {
      nip: nip,
      nama: nama,
      level: level,
      jabatan: jabatan,
      tanggal: tanggal,
      gapok: gapok,
      hadir: hadir,
      tidakhadir: tidakhadir,
      pottidak: pottidak,
      tunjangan: tunjangan,
      bonus: bonus,
      bpjs: bpjs,
      bersih: bersih,
      kotor: kotor,
    };

    localStorage.setItem("profil", JSON.stringify(users));
  };
  return (
    <div className="flex justify-between">
      <div className="w-full">
        <form
          action=""
          className="shadow border my-5 py-10 px-5 rounded-md"
          onSubmit={Submits}
        >
          <div className="border  p-5">
            <h2 className="text-center">Data Karyawan</h2>
            <div className="gap-y-4 flex-col flex">
              <div className="">
                <label
                  htmlFor="nip"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  NIP
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="nip"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2"
                    onChange={(e) => setNip(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nama Karyawan
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="nama"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2"
                    required
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="jabatan"
                  className="block text-sm font-medium leading-6 text-gray-900 capitalize"
                >
                  jabatan
                </label>
                <select
                  id="jabatan"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2"
                  required
                  onChange={(e) => setJabatan(e.target.value)}
                >
                  <option selected disabled>
                    Pilih Jabatan
                  </option>
                  <option value={"Admin"}>Admin</option>
                  <option value={"IT Support"}>IT Support</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="level"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Level
                </label>
                <select
                  id="level"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2"
                  required
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option selected disabled>
                    Pilih Level Jabatan
                  </option>
                  <option value={"Staff"}>Staff</option>
                  <option value={"Senior Staff"}>Senior Staff</option>
                  <option value={"Manager"}>Manager</option>
                </select>
              </div>
            </div>
          </div>
          {/* GAJI */}
          <div className="border  p-5 mt-5">
            <h2 className="text-center font-bold text-red-600">
              Data Penggajian
            </h2>
            <p>DATA HADIR : {hadir}</p>
            <div className="flex flex-col gap-y-4">
              <div className="">
                <label
                  htmlFor="tanggal"
                  className="block text-sm font-medium leading-6 text-gray-900 capitalize"
                >
                  tanggal
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    id="tanggal"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2"
                    defaultValue={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="gapok"
                  className="block text-sm font-medium leading-6 text-gray-900 capitalize"
                >
                  gaji pokok
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="gapok"
                    onChange={(e) => setGapok(e.target.value)}
                    defaultValue={gapok}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2"
                    required
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="hadir"
                  className="block text-sm font-medium leading-6 text-gray-900 capitalize"
                >
                  jumlah hadir (hari)
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="hadir"
                    onChange={(e) => setHadir(e.target.value)}
                    defaultValue={hadir}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2"
                    required
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="tidak_hadir"
                  className="block text-sm font-medium leading-6 text-gray-900 capitalize"
                >
                  jumlah tidak hadir (hari)
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    value={tidakhadir}
                    id="tidak_hadir"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2 read-only:bg-slate-100"
                    readOnly
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="potongan_hadir"
                  className="block text-sm font-medium leading-6 text-gray-900 capitalize"
                >
                  potongan tidak hadir (hari)
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="potongan_hadir"
                    value={pottidak}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2 read-only:bg-slate-100"
                    readOnly
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="tunjangan"
                  className="block text-sm font-medium leading-6 text-gray-900 capitalize"
                >
                  tunjangan transport
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="tunjangan"
                    defaultValue={tunjangan}
                    onChange={(e) => setTunjangan(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="bonus"
                  className="block text-sm font-medium leading-6 text-gray-900 capitalize"
                >
                  bonus pencapaian
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="bonus"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2"
                    defaultValue={bonus}
                    onChange={(e) => setBonus(e.target.value)}
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="bpjs"
                  className="block text-sm font-medium leading-6 text-gray-900 capitalize "
                >
                  potongan bpjs
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="bpjs"
                    readOnly
                    value={bpjs}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2 read-only:bg-slate-100"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="gaji_kotor"
                  className="block text-sm font-medium leading-6 text-gray-900 capitalize"
                >
                  gaji kotor
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="gaji_kotor"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2 read-only:bg-slate-100"
                    readOnly
                    value={kotor}
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="gaji_bersih"
                  className="block text-sm font-medium leading-6 text-gray-900 capitalize"
                >
                  gaji bersih
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="gaji_bersih"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none px-2 read-only:bg-slate-100"
                    readOnly
                    value={bersih}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {data ? (
        <Cards
          bersih={data.bersih}
          bonus={data.bonus}
          bpjs={data.bpjs}
          gapok={data.gapok}
          hadir={data.hadir}
          jabatan={data.jabatan}
          kotor={data.kotor}
          level={data.level}
          nama={data.nama}
          nip={data.nip}
          pottidak={data.pottidak}
          tanggal={data.tanggal}
          tidakhadir={data.tidakhadir}
          tunjangan={data.tunjangan}
        />
      ) : (
        <p className="text-center font-bold text-rose-500">
          Maaf data belum tersedia !!
        </p>
      )}
    </div>
  );
};
