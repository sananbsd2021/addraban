import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchBooksetbids } from "@/app/lib/data";
import { deleteBooksetbid } from "@/app/lib/actions";

const BookSetbidsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, booksetbids } = await fetchBooksetbids(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="......" />
        <Link href="/dashboard/booksetbids/add">
          <button className={styles.addButton}>เพิ่มข้อมูล</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>เลขคำสั่ง</td>
            <td>เรื่อง</td>
            <td>ลงวันที่</td>
            <td>หน่วยงาน</td>
            <td>ปี พ.ศ.</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {booksetbids.map((booksetbid) => (
            <tr key={booksetbid.id}>
              <td>
                <div className={styles.product}>{booksetbid.title}</div>
              </td>
              <td>{booksetbid.desc}</td>
              <td>{booksetbid.desc2}</td>
              <td>{booksetbid.desc3}</td>
              <td>{booksetbid.year}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/booksetbids/${booksetbid.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      แก้ไข
                    </button>
                  </Link>
                  <form action={deleteBooksetbid}>
                    <input type="hidden" name="id" value={booksetbid.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      ลบ
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default BookSetbidsPage;
