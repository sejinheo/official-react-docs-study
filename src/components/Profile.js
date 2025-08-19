import Avatar from "./Avatar"
import Card from "./Card";

function Profile() {
  return (
    <Card>
      <Avatar
        person={{ name: 'sejin', imageId: 'YfeOqp2' }}
        size={100}
      />
    </Card>
  )
}

export default Profile;