import { AppSidebar } from '@/components/dashboard/app-sidebar'
import { Header } from '@/components/dashboard/header'
import { InteractiveLessons } from '@/components/dashboard/interactive-lessons'
import { LearningPathCard } from '@/components/dashboard/learning-path-card'
import { StatsCards } from '@/components/dashboard/stats-cards'
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <Sidebar collapsible="icon">
          <AppSidebar />
        </Sidebar>
        <SidebarInset>
          <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
              <StatsCards />
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <InteractiveLessons />
                </div>
                <div className="lg:col-span-1">
                  <LearningPathCard />
                </div>
              </div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
