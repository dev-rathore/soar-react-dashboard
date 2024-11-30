import { Preferences, Security } from "../components/setting";
import { Card, Tabs } from "../components/ui";
import { EditProfileContainer } from "../containers/setting";

const Setting: React.FC = () => {
  const tabs = [
    {
      label: "Edit Profile",
      content: <EditProfileContainer />,
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
