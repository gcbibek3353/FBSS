export const revalidate = 60;
import WrapperCard from '@/components/WrapperCard'

import {getAllPhotos} from "@/actions/gallery"
import  GalleryContent  from "./galleryContent"

export default async function GalleryPage() {
  const res = await getAllPhotos();
  if(!res.success || !res.images ) return <div>{res.message}</div>

  return ( <div>
    <WrapperCard title='gallery' />
    <GalleryContent images={res.images} />
    </div>)
}
