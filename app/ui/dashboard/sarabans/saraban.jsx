import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchSarabans } from "@/app/lib/data";

const SarabansPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, sarabans } = await fetchSarabans(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="......" />
        <div>บันทึกข้อความ</div>
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
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default SarabansPage;
