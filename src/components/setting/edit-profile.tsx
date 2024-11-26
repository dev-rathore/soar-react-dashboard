import { Button, Input, Label } from "../ui";

const EditProfile: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="flex items-center px-10">
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/women/15.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <button
            className="absolute bottom-0 right-0 bg-app-black rounded-full p-2"
            aria-Label="Edit profile picture"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-1 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label>Your Name</Label>
            <Input
              type="text"
              defaultValue="Charlene Reed"
            />
          </div>
          <div>
            <Label>User Name</Label>
            <Input
              type="text"
              defaultValue="Charlene Reed"
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              defaultValue="charlenereed@gmail.com"
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              defaultValue="**********"
            />
          </div>
          <div>
            <Label>Date of Birth</Label>
            <Input
              type="text"
              defaultValue="25 January 1990"
            />
          </div>
          <div>
            <Label>Present Address</Label>
            <Input
              type="text"
              defaultValue="San Jose, California, USA"
            />
          </div>
          <div>
            <Label>Permanent Address</Label>
            <Input
              type="text"
              defaultValue="San Jose, California, USA"
            />
          </div>
          <div>
            <Label>City</Label>
            <Input
              type="text"
              defaultValue="San Jose"
            />
          </div>
        </div>
        <div
          className="w-full md:w-48 justify-self-end"
        >
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
