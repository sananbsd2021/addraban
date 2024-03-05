import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchBookbids } from "@/app/lib/data";
import { deleteBookbid } from "@/app/lib/actions";

const BookBidPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, bookbids } = await fetchBookbids(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a bookbid..." />
        <Link href="/dashboard/bookbid/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>เลขทะเบียน</td>
            <td>รายละเอียด</td>
            <td>หน่วยงาน</td>
            <td>ผู้ออก</td>
            <td>ปี พ.ศ.</td>
            <td>Created At</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {bookbids.map((bookbid) => (
            <tr key={bookbid.id}>
              <td>
                <div className={styles.product}>
                  {bookbid.title}
                </div>
              </td>
              <td>{bookbid.desc}</td>
              <td>{bookbid.desc2}</td>
              <td>{bookbid.desc3}</td>
              <td>{bookbid.year}</td>
              <td>{bookbid.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/bookbid/${bookbid.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteBookbid}>
                    <input type="hidden" name="id" value={bookbid.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
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

export default BookBidPage;
