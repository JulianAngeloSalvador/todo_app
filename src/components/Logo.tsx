export default function Logo() {
  return (
    <div className="w-[1.25em] h-[1.25em] aspect-auto flex justify-center items-center">
      {/* <div className="bg-primary w-[90%] h-0.5 rounded-md" />
      <div className="bg-primary w-[90%] h-0.5 rounded-md" /> */}
      <svg
        width="71"
        height="71"
        viewBox="0 0 71 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="35.3553"
          width="50"
          height="50"
          rx="4"
          transform="rotate(45 35.3553 0)"
          className="fill-secondary"
        />
        <rect
          x="18.3553"
          y="38.1041"
          width="32"
          height="6"
          rx="4"
          transform="rotate(-45 16.3553 37.1041)"
          className="fill-primary"
        />
        <rect
          x="25.3553"
          y="54.1041"
          width="32"
          height="6"
          rx="4"
          transform="rotate(-45 23.3553 52.1041)"
          className="fill-primary"
        />
      </svg>
    </div>
  );
}
