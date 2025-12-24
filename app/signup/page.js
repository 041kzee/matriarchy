"use client";

import { auth, db } from "../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleSignup = async () => {
    if (gender !== "woman") {
      alert("Matriarchy is a women-only space 🌸");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCred.user.uid), { gender });

      alert("Welcome to Matriarchy 👑");
      router.push("/"); 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-700 to-red-900">
      <div className="bg-red-900/20 backdrop-blur-xl p-10 rounded-3xl w-80 shadow-2xl text-center text-white border border-white/20">
        <h1 className="text-3xl font-extrabold tracking-widest mb-2">
          MATRIARCHY
        </h1>
        <p className="text-sm opacity-80 mb-8">
          A women-only digital sanctuary
        </p>

        <form
          className="flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignup();
          }}
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded-lg outline-none text-black placeholder-gray-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded-lg outline-none text-black placeholder-gray-500"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            className="w-full p-3 mb-6 rounded-lg outline-none text-black bg-white/90"
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="woman">Woman</option>
            <option value="man">Man</option>
          </select>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="w-full py-3 rounded-lg bg-red-900 hover:bg-red-800 transition-all font-semibold shadow-lg"
          >
            Enter Matriarchy
          </button>
        </form>
      </div>
    </div>
  );
}
