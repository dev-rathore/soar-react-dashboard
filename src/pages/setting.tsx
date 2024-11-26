import { EditProfile, Preferences, Security } from "../components/setting";
import { Card, Tabs } from "../components/ui";

const Setting: React.FC = () => {
  const tabs = [
    {
      label: "Edit Profile",
      content: <EditProfile />,
    },
    {
      label: "Preferences",
      content: <Preferences />,
    },
    {
      label: "Security",
      content: <Security />,
    },
  ];

  return (
    <Card>
      <Tabs tabs={tabs} defaultTabIndex={0} />
    </Card>
  )
};

export default Setting;
