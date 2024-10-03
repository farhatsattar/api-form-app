import { NextResponse } from "next/server";

const posts =[

{        "id":1,
    "userId" : 1,
   "title" : "this is custom post",
   "body"  : "this post is related to APi's"
},
{
"id":2,
"userId" : 2,
"title" : "this is custom post",
"body"  : "this post is related to APi's"
},
{
    "id":3,
    "userId" : 3,
    "title" : "this is custom post",
    "body"  : "this post is related to APi's"
    },

];



export function GET()
{

    return NextResponse.json(posts);
}
