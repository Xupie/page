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
      {resolvedTheme === "dark" ? (
        <Image
          src={`/github/github-mark-white.svg`}
          alt={"logo of github"}
          width={36}
          height={36}
          className={"hover"}
          loading={"lazy"}
        />
      ) : (
        <Image
          src={`/github/github-mark.svg`}
          alt={"logo of github"}
          width={36}
          height={36}
          loading={"lazy"}
        />
      )}
    </a>
  );
}