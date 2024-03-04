import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts2 } from "@/app/lib/data";
import { deleteProduct2 } from "@/app/lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products2 } = await fetchProducts2(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/palads/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>เลขทะเบียน</td>
            <td>รายละเอียด</td>
            {/* <td>Price</td>
            <td>Stock</td> */}
            <td>หน่วยงาน</td>
            <td>ผู้รับ</td>
            <td>Created At</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products2.map((product2) => (
            <tr key={product2.id}>
              <td>
                <div className={styles.product}>
                  {product2.title}
                </div>
              </td>
              <td>{product2.desc}</td>
              {/* <td>${product2.price}</td>
              <td>{product2.stock}</td> */}
              <td>{product2.desc2}</td>
              <td>{product2.desc3}</td>
              <td>{product2.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/palads/${product2.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct2}>
                    <input type="hidden" name="id" value={product2.id} />
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