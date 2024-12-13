import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      {/* Pastikan path ke logo sesuai dengan struktur folder Anda */}
      <img 
        src="./images/PID_black.png" 
        alt="Logo" 
        className="w-12 h-9" // Sesuaikan ukuran logo menggunakan Tailwind CSS
      />
    </Link>
  );
}
