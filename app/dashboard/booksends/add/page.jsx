import { addBooksend } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddBooksendPage = () => {
  return (
    <div className={styles.container}>
      <form action={addBooksend} className={styles.form}>
        <input type="text" placeholder="ที่ส่ง" name="title" required />
        <input type="desc2" placeholder="ลงวันที่" name="desc2" />
        <input type="desc3" placeholder="จาก" name="desc3" />
        <input type="desc4" placeholder="ถึง" name="desc4" />
        <input type="desc5" placeholder="เรื่อง" name="desc5" />
        <input type="desc10" placeholder="หมายเหตุ" name="desc10" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBooksendPage;
