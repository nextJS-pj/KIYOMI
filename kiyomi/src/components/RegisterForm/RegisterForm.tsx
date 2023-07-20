"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import classes from "./RegisterForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/firebase";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export function RegisterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm<FormData>();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);

    try {
      console.log("Submitting form data:", data);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      console.log("User created:", user);

      await updateProfile(user, {
        displayName: data.username,
      });

      console.log("User profile updated:", user);

      router.push("/");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("회원가입에 실패했습니다. 나중에 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto sm:p-10 mb-10 mt-10">
      <h1 className="text-3xl font-bold mb-6">회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="username" className="text-sm">
            아이디
          </label>
          <input
            id="username"
            type="text"
            placeholder="아이디"
            {...register("username", {
              required: "아이디를 입력하세요",
              pattern: {
                value: /^[a-zA-Z0-9]{6,12}$/,
                message: "영문 또는 영문, 숫자 조합 6~12자리를 입력하세요",
              },
            })}
            className={`w-full py-2 px-4 border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.username && (
            <span className="text-red-500">{errors.username.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-sm">
            이메일
          </label>
          <input
            id="email"
            type="text"
            placeholder="이메일"
            {...register("email", {
              required: "이메일을 입력하세요",
              pattern: {
                value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                message: "유효한 이메일 주소를 입력하세요",
              },
            })}
            className={`w-full py-2 px-4 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="text-sm">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호를 입력하세요",
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]{8,15}$/,
                message:
                  "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리로 입력하세요",
              },
            })}
            className={`w-full py-2 px-4 border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="text-sm">
            비밀번호 확인
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="비밀번호 확인"
            {...register("confirmPassword", {
              required: "비밀번호 확인을 입력하세요",
              validate: (value) =>
                value === getValues("password") ||
                "비밀번호가 일치하지 않습니다",
            })}
            className={`w-full py-2 px-4 border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button type="submit" className={classes.button} disabled={isLoading}>
          {isLoading ? "가입 중..." : "가입하기"}
        </button>
      </form>
    </div>
  );
}
