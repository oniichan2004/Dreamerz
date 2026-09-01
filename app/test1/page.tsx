import UserCard from "@/components/ui/user-card"
import { dreams } from "@/data/dreams-data"


export default function Test (){
    return (
        <div className="pt-35  ">
{dreams.map((dream) => (
  <UserCard
    key={dream.id}
    dream={dream}
  />
))}
        </div>
    )
}