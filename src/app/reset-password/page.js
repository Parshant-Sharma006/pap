"use client";

import { Input, Button } from "antd";
import { resetPasswordApi } from "@/api/api";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const [resetPassword, SetResetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  async function resetPasswordFun() {
    if (resetPassword === confirmPassword && resetPassword != "") {
      const token = searchParams.get("token");
      const email = decodeURIComponent(searchParams.get("email"));

      const obj = {
        token: token,
        email: email,
        newPassword: resetPassword,
      };
      const toastId = toast.loading("Saving...");
      const result = await resetPasswordApi(obj);

      if (result.success) {
        toast.success("Password Updated!", { id: toastId });
        setTimeout(() => router.push("/login"), 1000);
      } else {
        toast.error(`SomeThing Went Wrong`, { id: toastId });
      }
    }
  }

  return (
    <>
      <div className="flex justify-center items-center pt-20">
        <div className="w-[40%]  p-3 border-blue-100 border-0 rounded">
          <h3>Reset Password</h3>
          <h6>New Password</h6>
          <Input
            name="resetPassword"
            value={resetPassword}
            onChange={(e) => SetResetPassword(e.target.value)}
          />
          <h6 className="pt-2">Confirm Password</h6>
          <Input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => SetConfirmPassword(e.target.value)}
          />

          <button
            className="mt-4 w-full bg-green-600 rounded-4 p-1 border-green-600 text-white"
            onClick={() => resetPasswordFun()}
          >
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
}
