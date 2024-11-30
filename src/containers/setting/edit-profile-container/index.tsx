import { Suspense, useEffect } from "react";
import { EditProfile } from "../../../components/setting"
import { UserProfileSchemaType } from "../../../lib/zod-schemas/user-profile";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchUserById } from "../../../store/user/thunk";

const EditProfileContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { user, status } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUserById('1'));
    }
  }, [dispatch, status]);

  if (!user) return null;

  const onSubmit = (data: UserProfileSchemaType) => {
    console.log(data);
    toast.success("Profile updated successfully");
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditProfile
        user={user}
        onSubmit={onSubmit}
      />
    </Suspense>
  );
};

export default EditProfileContainer;
