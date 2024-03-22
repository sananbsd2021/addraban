import Image from "next/image"
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
//      {
//        title: "Users",
//        path: "/dashboard/users",
//        icon: <MdSupervisedUserCircle />,
//      },
//      {
//        title: "Products",
//        path: "/dashboard/products",
//        icon: <MdShoppingBag />,
//      },
//      {
//        title: "Transactions",
//        path: "/dashboard/transactions",
//        icon: <MdAttachMoney />,
//      },
      {
        title: "หนังสือรับ",
        path: "/dashboard/bookaccept",
        icon: <MdShoppingBag />,
      },
      {
        title: "หนังสือส่ง",
        path: "/dashboard/booksends",
        icon: <MdAttachMoney />,
      },
      {
        title: "บันทึกข้อความ",
        path: "/dashboard/sarabans",
        icon: <MdAttachMoney />,
      },
      {
        title: "ที่คำสั่ง",
        path: "/dashboard/booksetbids",
        icon: <MdAttachMoney />,
      },
    ],
  },
//  {
//    title: "Analytics",
//    list: [
//      {
//        title: "Revenue",
//        path: "/dashboard/revenue",
//        icon: <MdWork />,
//      },
//      {
//        title: "Reports",
//        path: "/dashboard/reports",
//        icon: <MdAnalytics />,
//      },
//      {
//        title: "Teams",
//        path: "/dashboard/teams",
//        icon: <MdPeople />,
//      },
//    ],
//  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
       icon: <MdHelpCenter />,
     },
   ],
  },
];

const SidebarPage = async () => {
  const { user } = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.img || "/sananPro.jpg"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default SidebarPage;
