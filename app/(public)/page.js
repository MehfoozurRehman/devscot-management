import Attendance from "@/models/attendance.js";
import User from "@/models/user.js";

export default async function ListOfUsers() {
  const date = new Date().toISOString();

  const [users, attendance] = await Promise.all([
    User.find().select("googleData _id").lean(),
    Attendance.find({
      checkIn: {
        $gte: new Date(date),
        $lt: new Date(date),
      },
    }).lean(),
  ]);

  const userWithAttendance = users.map((user) => {
    const userAttendance = attendance.find(
      (att) => att.user.toString() === user._id.toString()
    );
    return {
      ...user,
      attendance: userAttendance,
    };
  });

  return (
    <div>
      list of registered user
      <ul>
        <li>
          {userWithAttendance.map((user) => {
            return (
              <Link href={`/${user._id}`} key={user._id}>
                {user.googleData.name}
                <div>CheckedIn at: {}</div>
                <div>
                  CheckedOut at:{" "}
                  {new Date(user.attendance?.checkOut).toLocaleTimeString()}
                </div>
              </Link>
            );
          })}
        </li>
      </ul>
    </div>
  );
}
