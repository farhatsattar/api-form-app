
import { NextResponse,NextRequest } from "next/server";

const  userData = [
    {
        "name" :"Zafar",
        "contactnumber" : "0321-4591889"
    },
    
    {
        "name" :"Ibrahim",
        "contactnumber" : "0321-4891889"
    },
    {
        "name" :"anaya",
        "contactnumber" : "0331-4591889"
    },
];

export function GET(){

return NextResponse.json(userData);
}

export async function POST(request:NextRequest){
    const formData = await request.json()
    userData.push(formData)
    return NextResponse.json({"formData" :"successfully submitted"});
}