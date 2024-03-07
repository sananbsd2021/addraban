import { addBooksetbid } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddBookacceptPage = () => {
  return (
    <div className={styles.container}>
      <form action={addBooksetbid} className={styles.form}>
        <input type="text" placeholder="ที่คำสั่ง" name="title" />
        <textarea
          name="desc"
          id="desc"
          rows="5"
          placeholder="เรื่อง"
        ></textarea>
        <input type="desc2" placeholder="ลงวันที่" name="desc2" />
        <input type="desc3" placeholder="หน่วยงาน" name="desc3" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBookacceptPage;
