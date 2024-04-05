import { addBooksend } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddBooksendPage = () => {
  return (
    <div className={styles.container}>
      <form action={addBooksend} className={styles.form}>
      <input type="text" placeholder="เลขส่ง" name="title" required />
        <input type="text" placeholder="ที่หนังสือ" name="desc2" />
        <input type="date" placeholder="ลงวันที่" name="desc3" />
        <input type="text" placeholder="จาก" name="desc4" />
        <input type="text" placeholder="ถึง" name="desc5" />
        <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="เรื่อง"
          ></textarea>
        <input type="text" placeholder="การปฎิบัติ" name="desc6" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBooksendPage;
