import { useParams } from "next/navigation";

export const useCurrentSchoolId = () => {
  const params = useParams();
  return (params?.schoolId as string) ?? "";
};
