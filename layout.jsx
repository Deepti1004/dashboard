import DashboardNav from "./(components)/DashboardNav"


const DashboardLayout = ({children}) => {
  return (
    <main className="w-screen h-screen mx-auto">
        <DashboardNav />
        <div>
            {children}
        </div>
    </main>
  )
}

export default DashboardLayout