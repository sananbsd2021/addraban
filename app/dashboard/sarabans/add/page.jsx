import { addSaraban } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddSarabanPage = () => {
  return (
    <div className={styles.container}>
      <form action={addSaraban} className={styles.form}>
        <input type="text" placeholder="เลขทะเบียน" name="title" required />
        <input type="desc2" placeholder="ลงวันที่" name="desc2" />
        <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="เรื่อง"
          ></textarea>
        <input type="desc3" placeholder="หน่วยงาน" name="desc3" />
        <input type="desc4" placeholder="การปฏิบัติ" name="desc4" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddSarabanPage;
