"use client";

import { useEffect, useState } from "react";
import { Camera, UserRound } from "lucide-react";
import ProfileSettingsForm from "@/components/forms/settings/profile-settings-form";
import { useForm, Controller } from "react-hook-form";

import { Spinner } from "@/components/spinner";
import { Toast } from "@/lib/toast/toast";
import { ToastContainer } from "react-toastify";
import { IProfile, IUser } from "@/types/user";
import { ProfileService } from "@/services/profile.service";

export default function ProfileSettings() {
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [userProfile, setUserProfile] = useState<IProfile | null>(null);
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const {
    control,
    reset,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      display_name: "",
      user_timezone: "",
      role: "",
    },
  });
  const profileService = new ProfileService();
  const toast = new Toast();
  const handleFormSubmit = async (data: IProfile) => {
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("user_timezone", data.user_timezone);
    formData.append("role", data.role);
    
    if (data.cover_image) {
      formData.append("cover_image", data.cover_image);
    }
    
    if (coverImageFile) {
      formData.append("cover_image", coverImageFile);
    }

    profileService.updateUserProfile(formData).then((res) => {
      console.log(res, "Profile updated successfully");
      res?.statusCode == 200
        ? toast.showToast("success", res?.message)
        : toast.showToast("error", res?.message);
    });
  };

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await profileService.fetchUserProfile();
        console.log(res.data.cover_image, "from page");

        setFullName(res.data.first_name + " " + res.data.last_name);
        setEmail(res.data.email);
        if (res.data.cover_image) {
          const coverImagePath = `${process.env.NEXT_PUBLIC_BASE_ASSET_URL}${res.data.cover_image}`;
          setCoverImage(coverImagePath);
        }
        reset(res.data);
        setUserProfile(res.data);
      } catch (error) {
        console.error("Failed to fetch profile", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [reset]);

  return (
    <>
         
      {loading ? (
        <div className="flex justify-center items-center h-full">
           
          <Spinner size="large" />
        </div>
      ) : (
        <>
        <ToastContainer />
          <div className="bg-white min-h-screen w-full px-6 py-8 font-inter">
            <div className="rounded-2xl shadow border border-gray-200 overflow-hidden">
              
              <div className="relative h-40">
                <img
                  src={coverImage || "/images/image8.avif"}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
                <label className="absolute bottom-3 right-4 bg-white text-sm py-1 px-3 rounded-md shadow cursor-pointer flex items-center gap-2">
                  <Camera size={16} /> Change Cover
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setCoverImage(URL.createObjectURL(e.target.files[0]));
                        setCoverImageFile(e.target.files[0]);
                      }
                    }}
                  />
                </label>
              </div>

            
              <div className="flex items-center space-x-4 px-6 py-6">
                <div className="relative group w-16 h-16">
                  <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <UserRound className="w-8 h-8 text-gray-500" />
                    )}
                  </div>
                  <label className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 cursor-pointer flex items-center justify-center rounded-md transition-opacity">
                    <Camera className="text-white w-4 h-4" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setProfileImage(
                            URL.createObjectURL(e.target.files[0])
                          );
                        }
                      }}
                    />
                  </label>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {fullName}
                  </h2>
                  <p className="text-sm text-gray-600">{email}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <ProfileSettingsForm
                userProfile={userProfile}
                onSubmit={handleFormSubmit}
              />
            </div>
          </div>
        </>
      )}
    </>
 
  );
}