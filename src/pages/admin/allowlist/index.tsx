import ClearIcon from "@mui/icons-material/Clear";
import { UserRole } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { getServerAuthSession } from "~/server/auth";
import type { RouterInputs } from "~/utils/api";
import { api } from "~/utils/api";

type AllowEmail = RouterInputs["admin"]["allowlist"]["add"];

const AllowlistPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AllowEmail>({ mode: "onChange" });
  const emailErrors = errors.email;

  const utils = api.useContext();
  // NOTE: this was set up with the assumption the allowlist will be < 1000 entries, in case it ever exceeds we need to look into paginating these results
  const allowlist = api.admin.allowlist.all.useQuery();
  const allowEmail = api.admin.allowlist.add.useMutation({
    onSuccess(data) {
      if (!data) {
        void utils.admin.allowlist.invalidate();
      } else {
        utils.admin.allowlist.all.setData(undefined, (oldAllowlist) => [
          ...(oldAllowlist || []),
          data,
        ]);
      }
    },
  });
  const unallowEmail = api.admin.allowlist.remove.useMutation({
    onSuccess(email) {
      if (!email) {
        void utils.admin.allowlist.invalidate();
      } else {
        utils.admin.allowlist.all.setData(
          undefined,
          (oldAllowlist) =>
            oldAllowlist?.filter((entry) => entry.email !== email) || []
        );
      }
    },
  });

  return (
    <>
      <div className="min-h-screen justify-center px-8">
        <div className="my-2 text-4xl font-bold">Allowlisted Emails</div>
        <div className="flex flex-col text-lg">
          <form
            className="flex h-12 justify-center gap-6"
            onSubmit={handleSubmit((data) => allowEmail.mutate(data))}
          >
            <input
              {...register("email", {
                required: true,
                validate: (email) =>
                  z.string().email().safeParse(email).success ||
                  "must be valid email",
              })}
              className="w-10/12 rounded-md indent-2 shadow-md focus:outline-orange"
              placeholder="xyz@xyz.com"
            />
            <button
              type="submit"
              className="w-2/12 rounded border border-orange bg-orange py-3 font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black disabled:cursor-not-allowed"
              disabled={!!emailErrors}
              title={emailErrors?.message}
            >
              add
            </button>
          </form>
          <span className="pt-3 text-red-500">
            {allowEmail.error?.data?.code === "CONFLICT" &&
              `${allowEmail.variables?.email || ""} is already allowlisted`}
          </span>
          <hr className="mt-6" />
          {allowlist.data && (
            <ul className="flex list-none flex-col">
              {allowlist.data.map((allowedEntry) => (
                <li key={allowedEntry.email} className="flex items-center pt-6">
                  <span className="w-10/12 break-all">
                    {allowedEntry.email}
                  </span>
                  <div className="flex w-2/12 justify-center">
                    <ClearIcon
                      fontSize="inherit"
                      className="text-3xl hover:cursor-pointer"
                      onClick={() =>
                        unallowEmail.mutate({ email: allowedEntry.email })
                      }
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default AllowlistPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  if (session?.user.role !== UserRole.ADMIN) {
    return { redirect: { destination: "/" }, props: {} };
  }
  return { props: {} };
};
