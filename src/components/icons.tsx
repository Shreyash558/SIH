import type { SVGProps } from "react";

export function LearnscapeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 10v6" />
      <path d="M2 10v6" />
      <path d="m22-4-7 12-4-4-7 12" />
      <path d="m18 22-7-12-4 4L2 2" />
    </svg>
  );
}
