import { auth, signOut } from "@/auth"

const SettingsPage =async () => {

    const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
       <form action={async() =>{
        "use server";
         await signOut();
       }}>
        <button className="bg-destructive mt-3 ml-2 p-2 rounded-lg" type="submit">
           Sign-out
        </button>
       </form>
    </div>
  )
}

export default SettingsPage
