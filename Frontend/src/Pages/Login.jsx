import {
    Card,
    CardContent,
    CardDescription,  
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

//---------------------------------------------------------------------------------------------------------
export default function Login() {
    const [user, setUser] = useState("");
    const [inputValue, setInputValue] = useState("");

    // Debounce effect: Update `user` state after user stops typing
    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setUser(inputValue);
            
        }, 200); // 300ms delay

        // Clear timeout if input changes (prevents premature `setUser` calls)
        return () => clearTimeout(debounceTimer);
    }, [inputValue]);

    return (
        <div className="flex h-screen border border-black">
            <div className="w-[26%] flex items-center justify-center m-24">
                <LoginBox setInputValue={setInputValue} />
            </div>
            <div className="w-[65%] flex justify-center items-center">
                <LoginAnimation user={user} />
            </div>
        </div>
    );
}

function LoginBox({ setInputValue }) {
    return (
        <div>
            <Card className="w-full p-8 border rounded-xl">
                <CardHeader>
                    <CardTitle className="flex justify-center">Login</CardTitle>
                    <CardDescription className="flex justify-center">
                        Journey to the World starts from here
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Label>Username</Label>
                    <Input
                        placeholder="Username/Email"
                        type="email"
                        onChange={(e) => {
                            setInputValue(e.target.value);
                             // Update input value on each keystroke
                        }}
                    />
                    <Label>Password</Label>
                    <Input placeholder="Password" type="password" />
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <Button>Login</Button>
                    <p className="underline ml-2 cursor-pointer">Click here to get an account</p>
                </CardFooter>
            </Card>
        </div>
    );
}

function LoginAnimation({ user }) {
    const [image, setImage] = useState("/test/6665857.jpg"); // Set a default image path
    localStorage.setItem('username',user)

    // Update image based on user value with a debounce
    useEffect(() => {
        if (user === "Babuchan") {
            setImage("/test/6665857.jpg");
        } else if (user === "Babygirl") {
            setImage("/test/bbychan.jpg");
        } 
    }, [user]);

    return (
        <div className="w-2/3">
            <img src={image} alt="User Animation" className="max-w-full h-auto" />
        </div>
    );
}
