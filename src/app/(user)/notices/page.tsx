import { getAllNotices } from "@/actions/notice"
import NoticesContent from "./noticeContent"
import WrapperCard from "@/components/WrapperCard"

export default async function NoticesPage() {
  const { success, notices } = await getAllNotices()

  if (!success || !notices) {
    return <div>Failed to load notices</div>
  }

  return (
    <div>
      <WrapperCard title='notices' />
      <NoticesContent notices={notices} />
    </div>
  )
}
