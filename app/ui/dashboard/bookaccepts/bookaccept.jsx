import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchBookaccepts } from "@/app/lib/data";

const BookAcceptPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, bookaccepts } = await fetchBookaccepts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a bookaccept..." />
        <div>หนังสือรับ</div>
      </div>      
      <table className={styles.table}>
        <thead>
          <tr>
            <td>ทะเบียน</td>
            <td>เรื่อง</td>
            <td>ลงวันที่</td>
            <td>จาก</td>
            <td>ถึง</td>
          </tr>
        </thead>
        <tbody>
          {bookaccepts.map((bookaccept) => (
            <tr key={bookaccept.id}>
              <td>
                <div className={styles.product}>{bookaccept.title}</div>
              </td>
              <td>{bookaccept.desc}</td>
              <td>{bookaccept.desc3}</td>
              <td>{bookaccept.desc4}</td>
              <td>{bookaccept.desc5}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default BookAcceptPage;
