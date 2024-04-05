import { addBooksetbid } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddBooksetbidePage = () => {
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
        <input type="text" placeholder="ลงวันที่" name="desc2" />
        <input type="text" placeholder="หน่วยงาน" name="desc3" />
        <input type="text" placeholder="ปี พ.ศ." name="year" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBooksetbidePage;
