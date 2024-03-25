{/* import BookAcceptPage from "../ui/dashboard/bookaccepts/bookaccept"; */}
import BookSendsPage from "../ui/dashboard/booksends/booksends";
import Search from "@/app/ui/dashboard/search/search";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {/* <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div> */}
        <BookSendsPage />
{/*         <BookAcceptPage /> */}
{/*        <Transactions />  */}
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
