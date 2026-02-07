import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { ChevronRight } from "lucide-react";
import { Icons } from "@/components/icons";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import WordRotate from "@/components/magicui/word-rotate";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative pt-0 pb-12">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 md:size-32 rounded-2xl border shadow-xl ring-2 ring-muted bg-muted p-1">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="rounded-xl object-cover" />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-tight sm:text-5xl font-[family-name:var(--font-argent-italic)]"
                yOffset={8}
                text={DATA.name}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
                <WordRotate
                  className="text-xl font-medium text-muted-foreground tracking-tight"
                  words={[
                    "full stack engineer",
                    "software developer",
                    "UI/UX designer",
                    "entrepreneur",
                    "problem solver",
                  ]}
                />
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <section id="summary">
        <div className="mx-auto w-full max-w-2xl">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert text-[16px] md:text-[17px]">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <div className="mx-auto w-full max-w-2xl space-y-20">
        <section id="actions">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-wrap gap-3">
              <Link href={DATA.contact.social.GitHub.url} target="_blank">
                <ShimmerButton 
                  className="h-10 px-4 text-sm font-medium transition-transform active:scale-95"
                >
                  <Icons.github className="size-4 mr-2" />
                  GitHub
                </ShimmerButton>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <ShimmerButton 
                  className="h-10 px-4 text-sm font-medium transition-transform active:scale-95"
                >
                  <Icons.globe className="size-4 mr-2" />
                  Resume
                </ShimmerButton>
              </Link>
            </div>
          </BlurFade>
        </section>

        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
            </BlurFade>
            <div className="flex flex-col gap-2">
              {DATA.work.map((work, index) => (
                <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 5 + index * 0.05}>
                  <Link
                    href={work.href}
                    target="_blank"
                    className="flex items-center justify-between group p-3 -mx-3 hover:bg-[#111] rounded-2xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-xl border border-[#222] bg-[#111] p-2 flex items-center justify-center shadow-sm">
                        <img
                          src={work.logoUrl}
                          alt={work.company}
                          className="size-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-semibold leading-tight text-[16px]">{work.title}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5">{work.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground tabular-nums">
                        {work.start} - {work.end}
                      </span>
                      <ChevronRight className="size-4 text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="flex min-h-0 flex-col gap-y-8">
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
            </BlurFade>
            <div className="flex flex-col gap-10">
              {DATA.projects.map((project, index) => (
                <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 7 + index * 0.05}>
                  <Link
                    href={project.href}
                    target="_blank"
                    className="flex flex-col md:flex-row gap-6 group"
                  >
                    <div className="w-full md:w-56 aspect-[16/9] rounded-2xl overflow-hidden border border-[#222] bg-[#111] shadow-sm transform transition-all duration-500 group-hover:border-[#333]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-2">
                      <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </BlurFade>
              ))}
              <BlurFade delay={BLUR_FADE_DELAY * 8}>
                <div className="flex justify-center mt-4">
                  <Link
                    href="#projects"
                    className="text-muted-foreground hover:text-foreground text-[15px] font-medium transition-colors underline underline-offset-4"
                  >
                    View Projects
                  </Link>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-6 pb-20">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <ShimmerButton
                    className="h-11 w-fit px-4 flex items-center gap-3 hover:border-[#333] hover:bg-[#161616] transition-all cursor-default shadow-sm group"
                  >
                    {skill.icon && <skill.icon className="size-5 transition-transform group-hover:scale-110" />}
                    <span className="text-white text-[14px] font-medium">{skill.name}</span>
                  </ShimmerButton>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="flex min-h-0 flex-col gap-y-6 pb-20">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-2xl font-bold tracking-tight">Get In Touch</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-3">
              <BlurFade delay={BLUR_FADE_DELAY * 12}>
                <Link href={DATA.contact.social.GitHub.url} target="_blank">
                  <ShimmerButton className="h-10 px-4 text-sm font-medium transition-transform active:scale-95">
                    <Icons.github className="size-4 mr-2" />
                    GitHub
                  </ShimmerButton>
                </Link>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 13}>
                <Link href={DATA.contact.social.X.url} target="_blank">
                  <ShimmerButton className="h-10 px-4 text-sm font-medium transition-transform active:scale-95">
                    <Icons.x className="size-4 mr-2" />
                    Twitter
                  </ShimmerButton>
                </Link>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 14}>
                <Link href={DATA.contact.social.LinkedIn.url} target="_blank">
                  <ShimmerButton className="h-10 px-4 text-sm font-medium transition-transform active:scale-95">
                    <Icons.linkedin className="size-4 mr-2" />
                    LinkedIn
                  </ShimmerButton>
                </Link>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 15}>
                <Link href={DATA.contact.social.Telegram.url} target="_blank">
                  <ShimmerButton className="h-10 px-4 text-sm font-medium transition-transform active:scale-95">
                    <Icons.telegram className="size-4 mr-2" />
                    Telegram
                  </ShimmerButton>
                </Link>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 17}>
                <Link href={`mailto:${DATA.contact.email}`}>
                  <ShimmerButton className="h-10 px-4 text-sm font-medium transition-transform active:scale-95">
                    <Icons.email className="size-4 mr-2" />
                    Email
                  </ShimmerButton>
                </Link>
              </BlurFade>
            </div>
          </div>
        </section>
      </div>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Mubarek. All rights reserved.</p>
      </footer>
    </main>
  );
}
