
import { Button } from "../ui/button"
import { Text } from "../ui/text"
export default function FulfillTheirDreams (){



    return(

<div className="flex flex-col items-center gap-10 bg-gray-100 py-20 " >
<div>
<Text as="span" font="grotesk" className="text-2xl text-gray-700">
    Latest Dreams on Dreamerz
</Text>
</div>
<div>

</div>

<div className="">

<Button variant="gradient" className="py-6 px-9">
<Text as="span" font="grotesk" className="text-xl font-bold ">
    Fulfill Their Dreams
</Text>
</Button>

</div>
</div>

    )
}