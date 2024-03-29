import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchBooksends } from "@/app/lib/data";
import { deleteBooksend } from "@/app/lib/actions";

const BookSendsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, booksends } = await fetchBooksends(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="......" />
        <Link href="/dashboard/booksends/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>เลขส่ง</td>
            <td>ที่หนังสือ</td>
            <td>ลงวันที่</td>
            <td>จาก</td>
            <td>ถึง</td>
            <td>เรื่อง</td>
            <td>การปฎิบัติ</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {booksends.map((booksend) => (
            <tr key={booksend.id}>
              <td>
                <div className={styles.product}>
                  {booksend.title}
                </div>
              </td>
              <td>{booksend.desc2}</td>
              <td>{booksend.desc3}</td>
              <td>{booksend.desc4}</td>
              <td>{booksend.desc5}</td>
              <td>{booksend.desc}</td>
              <td>{booksend.desc6}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/booksends/${booksend.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteBooksend}>
                    <input type="hidden" name="id" value={booksend.id} />
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

export default BookSendsPage;
