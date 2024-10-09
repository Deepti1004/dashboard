"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"


const DashboardNav = () => {
    const [user, setUser] = useState({
        username:"",
        email:"",
    })
    const router = useRouter();
    const getDetails = async () => {
        try{
            const res = await fetch(`/api/userDetails`)
            if(!res.ok){
                return
            }
            const data = await res.json()
            if(!data?.user){
                return
            }
            setUser(data.user)
        }
        catch(error){
            console.error(error)
        }
    }
    
    const handleLogout = async () => {
        
        try{
            const res = await fetch("/api/userLogout")
            return router.refresh()
            
        }
        catch(error){
            throw new Error("Internal server error")
        }
    }

    useEffect(() => {
        getDetails()
    },[])
    
    return (
    <nav className="h-auto lg:w-screen w-auto mx-auto md:py-3 md:px-16 py-2 md:mb-5 md:mt-1 my-1 flex justify-between">
        <div className="flex justify-center items-center">
            <Link href="/" className="relative">
                <Image src="/logo.svg" alt="" width={180} height={180} />
            </Link>
        </div>

        {/* Mobile view */}
        <div className="sm:hidden flex relative justify-center items-center">
        <Button className = "mr-2" onClick = {handleLogout}>Logout</Button>
        </div>

        {/* Desktop view */}
        <div className="sm:flex hidden relative gap-2 justify-center items-center">
        <Button onClick = {handleLogout}>Logout</Button>
        </div>
    </nav>
  )
}

export default DashboardNav