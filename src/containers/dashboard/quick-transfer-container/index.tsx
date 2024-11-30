import { QuickTransfer } from "../../../components/dashboard";
import { Card } from "../../../components/ui";

const QuickTransferContainer: React.FC = () => {
  const teamMembers = [
    {
      id: '1',
      name: 'Livia Bator',
      role: 'CEO',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: '2',
      name: 'Randy Press',
      role: 'Director',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: '3',
      name: 'Workman',
      role: 'Designer',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: '4',
      name: 'Sarah Chen',
      role: 'Developer',
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: '5',
      name: 'Mike Ross',
      role: 'Manager',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ];

  return (
    <Card>
      <QuickTransfer
        data={teamMembers}
      />
    </Card>
  );
};

export default QuickTransferContainer;
