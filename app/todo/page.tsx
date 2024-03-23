import { createClient } from "@/utils/supabase/server";


export default async function Page () {
    const supabase = createClient();
    const {data,error} = await supabase.from("todo").select("*");
    //await　この処理が終わるまで待ってとう指示！　処理を待たずにjavaは進む特性がる

    console.log(data,error)

return(

    <> 
    </>
)
}

