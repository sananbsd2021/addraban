import { addBookbid } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddBookbidPage = () => {
  return (
    <div className={styles.container}>
      <form action={addBookbid} className={styles.form}>
        <input type="text" placeholder="เลขทะเบียน" name="title" required />
        <input type="desc" placeholder="เรื่อง" name="desc" required />
        <input type="desc2" placeholder="หน่วยงาน" name="desc2" required />
        <input type="desc3" placeholder="ผู้ออก" name="desc3" required />
        <input type="year" placeholder="ปี พ.ศ." name="year" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBookbidPage;
