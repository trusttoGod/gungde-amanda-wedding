"use client"

import Swal from "sweetalert2"

export default function WeddingGift() {

  const copyRek = (rekening) => {

    navigator.clipboard.writeText(rekening)

    Swal.fire({
      icon: "success",
      title: "Suksma 🙏",
      text: "Nomor rekening berhasil disalin",
      confirmButtonColor: "#C6A75E"
    })

  }

  return (

    <section className="mt-28 text-center px-6">

      <h2 className="text-2xl text-[#3A2E2A] mb-6 tracking-widest">
        Wedding Gift
      </h2>

      <p className="text-[#3A2E2A] max-w-xl mx-auto mb-10">
        Kehadiran dan doa restu Bapak/Ibu/Saudara/i merupakan hadiah terindah
        bagi kami. Namun apabila ingin memberikan tanda kasih,
        dapat melalui rekening berikut.
      </p>


      <div className="flex flex-col md:flex-row justify-center gap-6">


        {/* Rekening 1 */}

        <div className="border border-[#C6A75E] rounded-xl p-6 w-full max-w-sm shadow-lg bg-white">

          <h3 className="text-lg font-semibold text-[#3A2E2A] mb-2">
            Bank Mandiri
          </h3>

          <p className="text-2xl font-bold text-[#3A2E2A] mb-2">
            1450018259594
          </p>

          <p className="text-[#3A2E2A] mb-4">
            Anak Agung Gede Aryasatya
          </p>

          <button
            onClick={() => copyRek("1234567890")}
            className="bg-[#C6A75E] text-white px-4 py-2 rounded-lg hover:opacity-90"
          >
            Copy Rekening
          </button>

        </div>


        {/* Rekening 2 */}

        <div className="border border-[#C6A75E] rounded-xl p-6 w-full max-w-sm shadow-lg bg-white">

          <h3 className="text-lg font-semibold text-[#3A2E2A] mb-2">
            Bank BCA
          </h3>

          <p className="text-2xl font-bold text-[#3A2E2A] mb-2">
            2360677489
          </p>

          <p className="text-[#3A2E2A] mb-4">
            Ni Made Amanda Resmita Dewi
          </p>

          <button
            onClick={() => copyRek("9876543210")}
            className="bg-[#C6A75E] text-white px-4 py-2 rounded-lg hover:opacity-90"
          >
            Copy Rekening
          </button>

        </div>


      </div>

    </section>

  )

}