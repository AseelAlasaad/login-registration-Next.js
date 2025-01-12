'use client'
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [looding, setLooding] = useState(false)
    
    const router= useRouter()
    const handleSumbit = async (e) => {
        e.preventDefault()
        try {

            setLooding(true);

            // send data to the server
            const res= await fetch(`${process.env.API}/register`, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            // get the data
            const data= await res.json()
            if(!res.ok){
                toast.error(data.error)
                setLooding(false)
            }
            else{
                toast.success(data.success);
                router.push('/login')
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
                        <h1 className="mb-4 text-center">Register</h1>
                        <form onSubmit={handleSumbit}>
                            <input type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control mb-4"
                                placeholder="Enter your Name" />

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
                                disabled={looding || !name || !email || !password}>
                                {looding ? "Please Wait ..." : "Submit"}
                            </button>

                        </form>


                    </div>
                </div>
            </div>

        </main>
    )
}