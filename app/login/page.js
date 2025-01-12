'use client'
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import {signIn} from "next-auth/react"
export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [looding, setLooding] = useState(false)
    
    const router= useRouter()
    const handleSumbit = async (e) => {
        e.preventDefault()
        try {

            setLooding(true);
        
            const result= await signIn("credentials",{
                redirect:false,
                email,
                password
            })
          

             if (result?.error) {
                toast.error(result.error)
                setLooding(false)
             }
             else{
                toast.success("Logged in successfully")
                router.push("/")
             }

            
        } catch (error) {
            console.log(error);
            setLooding(false)

        }



    }

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-5 shadow bg-light p-5">
                        <h1 className="mb-4 text-center">Login</h1>
                        <form onSubmit={handleSumbit}>
                           

                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control mb-4"
                                placeholder="Enter your email" />

                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control mb-4"
                                placeholder="Enter your password" />

                            <button
                                className="btn btn-primary btn-raised"
                                disabled={looding || !email || !password}>
                                {looding ? "Please Wait ..." : "Submit"}
                            </button>

                        </form>


                    </div>
                </div>
            </div>

        </main>
    )
}