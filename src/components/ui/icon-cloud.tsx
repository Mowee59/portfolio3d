"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    className: "h-fit w-full  sm:h-[276px] ",
  },
  // canvasProps: {
  //   style: {
  //     maxHeight: "100%",
  //     margin: "0 auto",
  //   },
  // },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: true,
    imageScale: 2,
    activeCursor: "pointer",
    tooltip: "native",
    initial: [0.01, -0.01],
    dragControl: true,
    clickToFront: 500,
    dragThreshold: 100,
    fadeIn: 0.5,
    tooltipDelay: 0,
    outlineColour: "#0000",
    freezeActive: false,
    maxSpeed: 0.005,
    decel: 0.01,
    minSpeed: 0.02,
    shape: "vcylinder",

    // dragControl: false,
  },
  id: "icon-cloud",
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    );
  }, [data, theme]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
