"use client";

/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import Apple from "/public/assets/img/login/apple.svg";
import Kakao from "/public/assets/img/login/kakao.svg";
import Naver from "/public/assets/img/login/naver.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";

interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      if (userCredential.user) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
  };

  return (
    <div className="flex justify-center max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 flex flex-col m-14 justify-center sm:w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">로그인</h1>
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
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4  bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          로그인
        </button>
        <div className="mt-2 flex justify-end text-sm ">
          <a href="#" className="text-blue-500 hover:underline pr-2">
            아이디 찾기
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="text-blue-500 hover:underline pl-2">
            비밀번호 찾기
          </a>
        </div>

        <div className="flex justify-center mt-10 ">
          <Apple width={60} height={60} className="mr-3" />
          <Kakao width={60} height={60} className="mr-3" />
          <Naver width={60} height={60} className="mr-3" />
        </div>

        <div className="w-full  mt-8 relative">
          <div className="h-px bg-gray-300"></div>
        </div>

        <div className="mt-10  flex flex-col">
          <a href="#" className=" text-center hover:text ">
            비회원 주문 배송 조회 〉
          </a>
          <a href="#" className=" text-center hover:text p-3">
            회원가입하기 〉
          </a>
        </div>
      </form>
      <div className="w-1/2 flex justify-center md:hidden sm:hidden">
        <Image
          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2131250020230605122152.jpg"
          alt="이미지"
          width={500}
          height={300}
          className="rounded"
        />
      </div>
    </div>
  );
}
