import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchBooksetbids } from "@/app/lib/data";

const BooksetbidsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, booksetbids } = await fetchBooksetbids(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/booksetbids/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>ที่คำสั่ง</td>
            <td>เรื่อง</td>
            <td>ลงวันที่</td>
            <td>หน่วยงาน</td>
          </tr>
        </thead>
        <tbody>
          {booksetbids.map((booksetbid) => (
            <tr key={booksetbid.id}>
              <td>
                <div className={styles.product}>
                  {booksetbid.title}
                </div>
              </td>
              <td>{booksetbid.desc}</td>
              <td>{booksetbid.desc2}</td>
              <td>{booksetbid.desc3}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default BooksetbidsPage;
