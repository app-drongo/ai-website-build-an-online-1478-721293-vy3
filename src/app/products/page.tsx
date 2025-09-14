import Pageheader from '@/components/sections/shared/Pageheader'
import Productgrid from '@/components/sections/shared/Productgrid'
import Features from '@/components/sections/shared/Features'
import Gallery from '@/components/sections/product-collections/Gallery'

export default function ProductCollectionsPage() {
  return (
    <>
      <Pageheader />
      <Productgrid />
      <Features />
      <Gallery />
    </>
  )
}