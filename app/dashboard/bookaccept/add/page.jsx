import { addBookaccept } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddBookacceptPage = () => {
  return (
    <div className={styles.container}>
      <form action={addBookaccept} className={styles.form}>
        <input type="text" placeholder="ที่รับ" name="title" required />
        <input type="desc2" placeholder="ที่หนังสือ" name="desc2" />
        <input type="desc3" placeholder="ลงวันที่" name="desc3" />
        <input type="desc4" placeholder="จาก" name="desc4" />
        <input type="desc5" placeholder="ถึง" name="desc5" />
        <input type="desc" placeholder="เรื่อง" name="desc" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBookacceptPage;
