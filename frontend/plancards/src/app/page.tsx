import Image from "next/image";
import type { NextPage } from 'next'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="p-6">
        <Link href="/plan-cards">
            <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-700" type="button" data-test="button-start-new-game-cta">
                <span class="flex justify-center items-center">
                    <span>Plan your cards</span>
                </span>
            </button>
        </Link>
    </div>    
    </main>
  );
}