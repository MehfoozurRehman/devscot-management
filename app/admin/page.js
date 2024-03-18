import Attendance from "@/models/attendance.js";
import User from "@/models/user.js";
import "@/styles/dashboard.css";
import Link from "next/link";

export default async function ListOfUsers() {
  const date = new Date().toISOString();
  const [users, setUsers] = [];
  // const [users, attendance] = await Promise.all([
  //   User.find().select("googleData _id").lean(),
  //   Attendance.find({
  //     checkIn: {
  //       $gte: new Date(date),
  //       $lt: new Date(date),
  //     },
  //   }).lean(),
  // ]);

  const userWithAttendance = users?.map((user) => {
    const userAttendance = attendance.find(
      (att) => att.user.toString() === user._id.toString()
    );
    return {
      ...user,
      attendance: userAttendance,
    };
  });

  console.log(new Date().toLocaleString().split(",")[0]);

  return (
    <div className="container__main">
      <div className="container__main__users">
        <div className="container__main__users__top">
          <div className="container__main__users__top__heading">Users</div>
          <div className="container__main__users__top__date">
            <input
              type="date"
              defaultValue={`${new Date().toISOString().split("T")[0]}`}
              max={`${new Date().toISOString().split("T")[0]}`}
            />
          </div>
        </div>
        <div className="container__main__users__table">
          <div className="container__main__users__table__header">
            <div className="container__main__users__table__header__entry">
              Name
            </div>
            <div className="container__main__users__table__header__entry">
              Name
            </div>
            <div className="container__main__users__table__header__entry">
              Name
            </div>
            <div className="container__main__users__table__header__entry">
              Check In
            </div>
            <div className="container__main__users__table__header__entry">
              Check Out
            </div>
          </div>
          <div className="container__main__users__table__body">
            <Link
              href={"admin/detail"}
              className="container__main__users__table__body__row"
            >
              <div className="container__main__users__table__body__row__entry">
                Ali Akbar
              </div>
              <div className="container__main__users__table__body__row__entry">
                Ali
              </div>
              <div className="container__main__users__table__body__row__entry">
                Ali
              </div>
              <div className="container__main__users__table__body__row__entry">
                Ali
              </div>
              <div className="container__main__users__table__body__row__entry">
                Ali
              </div>
            </Link>
            <Link
              href={"admin/detail"}
              className="container__main__users__table__body__row"
            >
              <div className="container__main__users__table__body__row__entry">
                Ali
              </div>
              <div className="container__main__users__table__body__row__entry">
                Ali
              </div>
              <div className="container__main__users__table__body__row__entry">
                Ali
              </div>
              <div className="container__main__users__table__body__row__entry">
                Ali
              </div>
              <div className="container__main__users__table__body__row__entry">
                Ali
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
