"use client";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

function RegisterPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto min-h-screen sm:p-3">
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
            {...register("username", { required: "아이디를 입력하세요" })}
            className={`w-full py-2 px-4 border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
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
            {...register("password", { required: "비밀번호를 입력하세요" })}
            className={`w-full py-2 px-4 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
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
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-sm">
            이메일
          </label>
          <input
            id="email"
            type="email"
            placeholder="이메일"
            {...register("email", {
              required: "이메일을 입력하세요",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "유효한 이메일 주소를 입력하세요",
              },
            })}
            className={`w-full py-2 px-4 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          가입하기
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
