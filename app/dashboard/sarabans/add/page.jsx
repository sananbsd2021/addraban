import { addSaraban } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddSarabanPage = () => {
  return (
    <div className={styles.container}>
      <form action={addSaraban} className={styles.form}>
        <input type="text" placeholder="เลขทะเบียน" name="title" required />
        <input type="date" placeholder="ลงวันที่" name="desc2" />
        <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="เรื่อง"
          ></textarea>
        <input type="text" placeholder="หน่วยงาน" name="desc3" />
        <input type="text" placeholder="การปฏิบัติ" name="desc4" />
        <input type="text" placeholder="ปี พ.ศ." name="year" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddSarabanPage;
