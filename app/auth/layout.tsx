
const AuthLayout = ({
    children} : {
        children:React.ReactNode
    }) => {
  return (

    <div className="      flex h-full flex-col items-center justify-center bg-gradient-to-br 
        from-blue-600 via-teal-500 to-green-500 relative overflow-hidden
        before:absolute before:bottom-0 before:w-[120%] before:h-[50%] 
        before:bg-teal-700 before:rounded-full before:blur-3xl before:opacity-40 
        after:absolute after:top-0 after:w-full after:h-[5%] 
        after:bg-gradient-to-b after:from-black/30 after:to-transparent">
      {children}
    </div>
  )
}

export default AuthLayout;
