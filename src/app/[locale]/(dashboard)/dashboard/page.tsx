import { tools } from "@/config/tools"
import { Icons } from "@/components/icons"
import ApplicationCard from "@/components/application-card"
import { loadFullApplications } from "@/lib/applications"

export default async function HomePage() {
  const applications = await loadFullApplications()

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          AI-Driven Micro-SaaS
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Work 10x faster with your personal AI assistants.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 place-items-center lg:gap-5 px-4 md:px-8">
          {applications.map((application) => {
            const Icon = Icons[application.icon as keyof typeof Icons]
            return (
              <ApplicationCard
                key={application.id}
                card={{
                  title: application.name,
                  description: application.description,
                  href: `/dashboard/applications/${application.id}`,
                  icon: <Icon color="white" width={24} height={24} />,
                  buttonText: "Launch",
                  loadingIcon: (
                    <Icons.spinner color="#0F172A" width={14} height={14} />
                  ),
                  buttonIcon: (
                    <Icons.add
                      color="#0F172A"
                      className="ml-2"
                      width={16}
                      height={16}
                    />
                  ),
                }}
              />
            )
          })}
          {tools.map((tool) => {
            const Icon = Icons[tool.icon as keyof typeof Icons]
            return (
              <ApplicationCard
                key={tool.href}
                card={{
                  title: tool.label,
                  description:
                    "Create a call and invite others to join in conversation, discussion, or collaboration.",
                  href: tool.href,
                  // icon: <Icon className={tool.color} width={24} height={24} />,
                  icon: <Icon color="white" width={24} height={24} />,
                  buttonText: "Generate",
                  loadingIcon: (
                    <Icons.spinner color="#0F172A" width={14} height={14} />
                  ),
                  buttonIcon: (
                    <Icons.add
                      color="#0F172A"
                      className="ml-2"
                      width={16}
                      height={16}
                    />
                  ),
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
