import { addBooksend } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddBooksendPage = () => {
  return (
    <div className={styles.container}>
      <form action={addBooksend} className={styles.form}>
      <input type="text" placeholder="เลขรับ" name="title" required />
        <input type="desc2" placeholder="ที่หนังสือ" name="desc2" />
        <input type="desc3" placeholder="ลงวันที่" name="desc3" />
        <input type="desc4" placeholder="จาก" name="desc4" />
        <input type="desc5" placeholder="ถึง" name="desc5" />
        <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="เรื่อง"
          ></textarea>
        <input type="desc6" placeholder="การปฎิบัติ" name="desc6" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBooksendPage;
