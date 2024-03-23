import { createClient } from "@/utils/supabase/server";


export default async function Page () {
    const supabase = createClient();
    const {data,error} = await supabase.from("todo").select("*");
    //await：この処理が終わるまで待ってという指示！　処理を待たずにjavascriptは処理を進めていく特性がある。多用に注意

    if (error) return <div>Error</div>
    
return(

    <div> 
        {data.map((itme) => (
            <div key ={itme.id}>{itme.name}</div>

        ))}
        </div>
    
)
}
