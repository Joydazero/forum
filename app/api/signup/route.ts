import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export async function POST(request: Request) {

    const body = await request.json();
    const { password, ...rest } = body; 

     if (typeof password !== "string") {
       return Response.json(
         { message: "비밀번호 형식이 올바르지 않습니다." },
         { status: 400 }
       );
     }
    const hashedPassword = await bcrypt.hash(password, 10);

    
    console.log(hashedPassword);
    console.log(body);
    
    const client = await connectDB;
    const db = client.db("forum"); // 데이터베이스명 
    const result = await db.collection("user_cred").insertOne({
      ...rest,
      password: hashedPassword,
    });
    console.log(result);

    return Response.json(result);
}
