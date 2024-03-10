import { addPalad } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddPaladPage = () => {
  return (
    <div className={styles.container}>
      <form action={addBooksend} className={styles.form}>
      <input type="text" placeholder="เลขรับ" name="title" required />
        <input type="number" placeholder="ที่หนังสือ" name="number" />
        <input type="desc" placeholder="ลงวันที่" name="desc" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPaladPage;
