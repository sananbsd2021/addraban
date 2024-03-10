import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchPalads } from "@/app/lib/data";
import { deletePalad } from "@/app/lib/actions";

const PaladsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, palads } = await fetchPalads(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Booksend..." />
        <Link href="/dashboard/palads/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>เลขส่ง</td>
            <td>ที่หนังสือ</td>
            <td>ลงวันที่</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {palads.map((palad) => (
            <tr key={palad.id}>
              <td>
                <div className={styles.product}>
                  {palad.title}
                </div>
              </td>
              <td>{palad.desc2}</td>
              <td>{booksend.number}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/palads/${palad.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deletePalad}>
                    <input type="hidden" name="id" value={palad.id} />
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

export default PaladsPage;
