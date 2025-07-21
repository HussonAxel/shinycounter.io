import { createFileRoute } from '@tanstack/react-router'
// import TypeBasicData from '@/components/features/types/TypeBasicData'
import TypeDamageRelations from '@/components/features/types/TypeDamageRelations'
export const Route = createFileRoute('/type/$type')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    {/* <TypeBasicData /> */}
    <TypeDamageRelations />
  </>
}
