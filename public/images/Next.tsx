export default function Next( ){
    const size:number=25;
    return (
         <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={size}
    height={size}
  >
    <defs>
      <linearGradient id="nextGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C6FF" />
        <stop offset="50%" stopColor="#0072FF" />
        <stop offset="100%" stopColor="#7928CA" />
      </linearGradient>
    </defs>

    <circle cx="128" cy="128" r="120" fill="url(#nextGradient)" />

    <path
      d="M75 70h22l38 50V70h18v116h-20l-40-52v52H75z"
      fill="#fff"
    />

    <path
      d="M160 70h36c28 0 46 18 46 46s-18 46-46 46h-36z
         m35 75c17 0 28-11 28-29s-11-29-28-29h-16v58z"
      fill="#fff"
    />
  </svg>
    )
}