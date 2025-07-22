import { createFileRoute } from '@tanstack/react-router'
import ComponentTabs436 from '@/components/features/types/TabsContainer'
export const Route = createFileRoute('/type/$type')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <ComponentTabs436 />
  </>
}
