import { BASE_API_URL, GAMES } from "@/constants/routes";
import { Button, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";

const getData = async () => {
  const res = await fetch(GAMES)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Home = async () => {
  const session = await getServerSession(authOptions)
  const paginatedData = await getData()

  return (
    <main>
        {paginatedData?.data?.map((_game: any) => (
          <div key={_game.id}>
            <h3>{_game.title}</h3>
            {/* <Image src={BASE_API_URL + _game.image.path} alt={_game.title} width={360} height={200} /> */}
            <p>{_game.description}</p>
          </div>
        ))}
        <LoginForm />
        <Typography variant="h3">{session ? JSON.stringify(session, null, 2) : "Please sign in"}</Typography>
    </main>
  );
}

export default Home
