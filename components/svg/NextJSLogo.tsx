export default function NextJSLogo() {
  return (
    <svg
      aria-label="Next.js logomark"
      className="h-16 w-16"
      viewBox="0 0 180 180"
    >
      <mask
        height={180}
        id="a"
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
        width={180}
        x={0}
        y={0}
      >
        <circle cx={90} cy={90} r={90} />
      </mask>
      <g mask="url(#a)">
        <circle cx={90} cy={90} data-circle="true" r={90} />
        <path
          d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
          fill="url(#:R0:paint0_linear_408_134)"
        />
        <path fill="url(#:R0:paint1_linear_408_134)" d="M115 54H127V126H115z" />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id=":R0:paint0_linear_408_134"
          x1={109}
          x2={144.5}
          y1={116.5}
          y2={160.5}
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id=":R0:paint1_linear_408_134"
          x1={121}
          x2={120.799}
          y1={54}
          y2={106.875}
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}
