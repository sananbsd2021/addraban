import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchSarabans } from "@/app/lib/data";
import { deleteSaraban } from "@/app/lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, sarabans } = await fetchSarabans(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/sarabans/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>เลขทะเบียน</td>
            <td>วันที่</td>
            <td>เรื่อง</td>
            <td>หน่วยงาน</td>
            <td>การปฏิบัติ</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {sarabans.map((saraban) => (
            <tr key={saraban.id}>
              <td>
                <div className={styles.product}>
                  {saraban.title}
                </div>
              </td>
              <td>{saraban.desc}</td>
              <td>{saraban.desc2}</td>
              <td>{saraban.desc3}</td>
              <td>{saraban.desc4}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/sarabans/${saraban.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteSaraban}>
                    <input type="hidden" name="id" value={saraban.id} />
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

export default ProductsPage;
