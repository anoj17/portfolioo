import IconCloud from "@/components/magicui/icon-cloud";
 
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
 
function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[38rem] items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-black/80 px-5 md:px-14 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo