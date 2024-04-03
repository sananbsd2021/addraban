import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchBooksetbids } from "@/app/lib/data";
import { deleteBooksetbid } from "@/app/lib/actions";

const BooksetbidsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, booksetbids } = await fetchBooksetbids(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="......" />
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
            <td>Action</td>
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
              <td>
                <div className={styles.buttons}>
          {/*         <Link href={`/dashboard/bookaccept/${bookaccept.id}`}>
                        <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link> */}
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

export default BooksetbidsPage;
