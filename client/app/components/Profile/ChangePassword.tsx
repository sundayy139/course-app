import { styles } from "@/app/styles/styles";
import { useUpdatePasswordMutation } from "@/redux/features/user/userApi";
import React, { FC, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {};

const ChangePassword: FC<Props> = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

  const passwordChangeHandler = async (e: any) => {
    e.preventDefault();
    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
      toast.error("Please fill all the fields");
    } else if (newPassword !== confirmPassword) {
      toast.error("Password does not match");
    } else {
      await updatePassword({ oldPassword, newPassword });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password change successfully");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }

    if (error) {
      if ("data" in error) {
        const errData = error as any;
        toast.error(errData.data.message);
      }
    }
  }, [isSuccess, error]);

  return (
    <div className="w-full pl-7 800px:px-5 800px:pl-0">
      <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] text-white pb-2">
        Change Password
      </h1>
      <div className="w-full">
        <form
          aria-required
          onSubmit={passwordChangeHandler}
          className="flex flex-col items-center"
        >
          <div className="w-full 800px:w-[60%] mt-5">
            <label htmlFor="" className="block pb-2">
              Enter your old password
            </label>
            <input
              type="password"
              className={`${styles.input} w-[95%] mb-4 800px:mb-0`}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="w-full 800px:w-[60%] mt-5">
            <label htmlFor="" className="block pb-2">
              Enter your new password
            </label>
            <input
              type="password"
              className={`${styles.input} w-[95%] mb-4 800px:mb-0`}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="w-full 800px:w-[60%] mt-5">
            <label htmlFor="" className="block pb-2">
              Enter your confirm password
            </label>
            <input
              type="password"
              className={`${styles.input} w-[95%] mb-4 800px:mb-0`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              className={`w-full h-[40px] border border-[#37a39a] text-center dark:text-white text-black mt-8 rounded-[3px] cursor-pointer`}
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
