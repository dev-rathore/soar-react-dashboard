import { Suspense } from "react";
import { EditProfile } from "../../../components/setting"
import { UserProfileSchemaType } from "../../../lib/zod-schemas/user-profile";
import { toast } from "react-toastify";

const EditProfileContainer: React.FC = () => {
  const user = {
    address: {
      present: "San Jose, California, USA",
      permanent: "San Jose, California, USA",
      city: "San Jose",
    },
    createdAt: new Date(),
    dob: new Date(),
    email: "charlenereed@gmail.com",
    id: "1",
    name: "Charlene Reed",
    password: "password",
    profileImage: "https://randomuser.me/api/portraits/women/15.jpg",
    updatedAt: new Date(),
    username: "charlenereed",
  };

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
