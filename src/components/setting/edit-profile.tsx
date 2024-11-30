import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Error, Input, Label, Modal } from "../ui";
import {
  UserProfileSchema,
  UserProfileSchemaType,
} from "../../lib/zod-schemas/user-profile";
import { User } from "../../lib/types/user";
import pencilSrc from "../../assets/icons/pencil.svg";
import ImageModal from "./image-modal";
import { toast } from "react-toastify";

interface EditProfileProps {
  user: User;
  onSubmit: (data: UserProfileSchemaType) => void;
};

const EditProfile: React.FC<EditProfileProps> = ({
  user,
  onSubmit,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(user?.profileImage || null);
  const [profileImage, setProfileImage] = useState<string>(user?.profileImage);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (files: FileList | null) => {
    if (files && files[0]) {
      const selectedFile = files[0];
      setFile(selectedFile);
      const objectUrl = URL.createObjectURL(selectedFile)
      setPreviewUrl(objectUrl);
    }
  }

  const handleImageUpload = () => {
    if (file && previewUrl) {
      setProfileImage(previewUrl);
      toast.success("Image uploaded successfully");
      setIsModalOpen(false);
      setFile(null);
      setPreviewUrl(null);
    }
  }

  const handleImageRemove = () => {
    setFile(null);
    setPreviewUrl(null);
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<UserProfileSchemaType>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: {
      address: {
        city: user?.address?.city,
        permanent: user?.address?.permanent,
        present: user?.address?.present,
      },
      dob: user?.dob,
      email: user?.email,
      name: user?.name,
      password: user?.password,
      username: user?.username,
      profileImage,
    },
  });

  useEffect(() => {
    setValue("profileImage", profileImage);
  }, [profileImage]);

  return (
    <form
      className="w-full flex flex-col md:flex-row md:items-start gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center justify-center md:justify-start px-10">
        <div className="relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <button
            type="button"
            className="absolute bottom-0 right-0 bg-app-black rounded-full p-2"
            aria-label="Edit profile picture"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={pencilSrc}
              alt="Edit Image"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
      <div className="flex-1 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">
              Your Name
            </Label>
            <Input
              aria-invalid={errors.name ? "true" : "false"}
              id="name"
              type="text"
              {...register("name")}
            />
            {errors.name && (
              <Error
                message={errors.name.message}
              />
            )}
          </div>
          <div>
            <Label htmlFor="username">
              User Name
            </Label>
            <Input
              aria-invalid={errors.username ? "true" : "false"}
              id="username"
              type="text"
              {...register("username")}
            />
            {errors.username && (
              <Error
                message={errors.username.message}
              />
            )}
          </div>
          <div>
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              aria-invalid={errors.email ? "true" : "false"}
              id="email"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <Error
                message={errors.email.message}
              />
            )}
          </div>
          <div>
            <Label htmlFor="password">
              Password
            </Label>
            <Input
              aria-invalid={errors.password ? "true" : "false"}
              id="password"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <Error
                message={errors.password.message}
              />
            )}
          </div>
          <div>
            <Label htmlFor="dob">
              Date of Birth
            </Label>
            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <Input
                  aria-invalid={errors.dob ? "true" : "false"}
                  id="dob"
                  type="date"
                  {...field}
                />
              )}
            />
            {errors.dob && (
              <Error
                message={errors.dob.message}
              />
            )}
          </div>
          <div>
            <Label htmlFor="presentAddress">
              Present Address
            </Label>
            <Input
              aria-invalid={errors.address?.present ? "true" : "false"}
              id="address.present"
              type="text"
              {...register("address.present")}
            />
            {errors.address?.present && (
              <Error
                message={errors.address.present.message}
              />
            )}
          </div>
          <div>
            <Label htmlFor="permanentAddress">
              Permanent Address
            </Label>
            <Input
              aria-invalid={errors.address?.permanent ? "true" : "false"}
              id="address.permanent"
              type="text"
              {...register("address.permanent")}
            />
            {errors.address?.permanent && (
              <Error
                message={errors.address.permanent.message}
              />
            )}
          </div>
          <div>
            <Label htmlFor="city">
              City
            </Label>
            <Input
              aria-invalid={errors.address?.city ? "true" : "false"}
              id="address.city"
              type="text"
              {...register("address.city")}
            />
            {errors.address?.city && (
              <Error
                message={errors.address.city.message}
              />
            )}
          </div>
        </div>
        <div
          className="w-full md:w-48 justify-self-end"
        >
          <Button>Save</Button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setFile(null);
          setPreviewUrl(null);
        }}
        title="Upload Profile Photo"
      >
        <ImageModal
          file={file}
          handleFileChange={handleFileChange}
          handleRemove={handleImageRemove}
          handleUpload={handleImageUpload}
          previewUrl={previewUrl}
        />
      </Modal>
    </form>
  );
};

export default EditProfile;
