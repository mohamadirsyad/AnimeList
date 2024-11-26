import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
const page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary">
      <h1>dashboard</h1>
      <h3>Selamat datang {user.name}</h3>
      <Image src={user.image} width={200} height={200} alt="..." />
    </div>
  );
};

export default page;
