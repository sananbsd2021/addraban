import { updateBooksend } from "@/app/lib/actions";
import { fetchBooksend } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleBooksendPage = async ({ params }) => {
  const { id } = params;
  const booksend = await fetchBooksend(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {booksend.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateBooksend} className={styles.form}>
          <input type="hidden" name="id" value={booksend.id} />
          <label>เลขส่ง</label>
          <input type="text" name="title" placeholder={booksend.title} />
          <label>ที่หนังสือ</label>
          <input type="text" name="desc2" placeholder={booksend.desc2} />
          <label>ลงวันที่</label>
          <input type="text" name="desc3" placeholder={booksend.desc3} />
          <label>จาก</label>
          <input type="text" name="desc4" placeholder={booksend.desc4} />
           <label>ถึง</label>
          <input type="text" name="desc5" placeholder={booksend.desc5} />
          <label>เรื่อง</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={booksend.desc}
          ></textarea>
          <label>การปฎิบัติ</label>
          <input type="text" name="desc6" placeholder={booksend.desc6} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleBooksendPage;
