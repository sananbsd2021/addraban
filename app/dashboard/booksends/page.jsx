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
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/booksends/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>เลขทะเบียน</td>
            <td>รายละเอียด</td>
            <td>หน่วยงาน</td>
            <td>ผู้รับ</td>
            <td>ผู้จ่าย</td>
            <td>ปี พ.ศ.</td>
            <td>Created At</td>
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
              <td>{booksend.desc}</td>
              <td>{booksend.desc2}</td>
              <td>{booksend.desc3}</td>
              <td>{booksend.desc4}</td>
              <td>{booksend.year}</td>
              <td>{booksend.createdAt?.toString().slice(4, 16)}</td>
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