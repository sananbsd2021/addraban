import { addBookaccept } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddBookacceptPage = () => {
  return (
    <div className={styles.container}>
      <form action={addBookaccept} className={styles.form}>
        <input type="text" placeholder="ที่รับ" name="title" required />
        <input type="desc" placeholder="เรื่อง" name="desc" />
        <input type="desc2" placeholder="หน่วยงาน" name="desc2" />
        <input type="desc3" placeholder="ผู้รับ" name="desc3" />
        <input type="desc4" placeholder="ผู้จ่าย" name="desc4" />
        <input type="year" placeholder="ปี พ.ศ." name="year" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBookacceptPage;
