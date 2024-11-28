import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "mysql",
  "mongodb",
  "nginx",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "github",
  "gitlab",
  "php",
  "jenkins",
  "symfony",
  "python",
  "angular",
  "nestjs",
];



export function IconCloudDemo() {
  return <IconCloud iconSlugs={slugs} />;
}
