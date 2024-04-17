import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchBookaccepts } from "@/app/lib/data";
import { deleteBookaccept } from "@/app/lib/actions";

const BookAcceptPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, bookaccepts } = await fetchBookaccepts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="......" />
        <Link href="/dashboard/bookaccept/add">
          <button className={styles.addButton}>เพิ่มข้อมูล</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>เลขรับ</td>
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
          {bookaccepts.map((bookaccept) => (
            <tr key={bookaccept.id}>
              <td>
                <div className={styles.product}>
                  {bookaccept.title}
                </div>
              </td>
              <td>{bookaccept.desc2}</td>
              <td>{bookaccept.desc3}</td>
              <td>{bookaccept.desc4}</td>
              <td>{bookaccept.desc5}</td>
              <td>{bookaccept.desc}</td>
              <td>{bookaccept.desc6}</td>
    {*/          <td>
                <div className={styles.buttons}>
                   <Link href={`/dashboard/bookaccept/${bookaccept.id}`}>
                        <button className={`${styles.button} ${styles.view}`}>
                      แก้ไข
                    </button>
                  </Link>
                  <form action={deleteBookaccept}>
                    <input type="hidden" name="id" value={bookaccept.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      ลบ
                    </button>
                  </form>
                </div>
              </td> /*}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default BookAcceptPage;
