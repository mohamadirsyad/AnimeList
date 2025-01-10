import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
const page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary flex flex-col justify-center items-center mt-8">
      <h3 className="font-bold text-2xl">Selamat datang {user.name}</h3>
      <Image
        className="mt-4"
        src={user.image}
        width={200}
        height={200}
        alt="..."
      />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent text-color-dark font-bold py-3 px-4 text-xl rounded-xl"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent text-color-dark font-bold py-3 px-4 text-xl rounded-xl"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default page;
