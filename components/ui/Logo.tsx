export default function Logo() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      {/* Owl Body */}
      <path d="M12 2C7 2 4 6 4 10c0 4 4 8 8 12 4-4 8-8 8-12 0-4-3-8-8-8zm0 17c-3-3-6-6-6-9 0-3 2-6 6-6s6 3 6 6c0 3-3 6-6 9z" />

      {/* Owl Eyes */}
      <circle cx="9" cy="10" r="1.5" fill="black" />
      <circle cx="15" cy="10" r="1.5" fill="black" />

      {/* Owl Beak */}
      <path d="M11 12h2l-1 2z" fill="black" />
    </svg>
  );
}
