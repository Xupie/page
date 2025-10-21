import Image from "next/image";
import { useTheme } from "next-themes";

export function LogoGithub() {
  const { resolvedTheme } = useTheme();

  return (
    <a
      href="https://github.com/Xupie"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={
          resolvedTheme === "dark"
            ? `/github/github-mark-white.svg`
            : `/github/github-mark.svg`
        }
        alt={"logo of github"}
        width={36}
        height={36}
        className={"hover"}
        loading={"lazy"}
      />
    </a>
  );
}
