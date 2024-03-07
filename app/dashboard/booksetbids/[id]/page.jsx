import { updateBookaccept } from "@/app/lib/actions";
import { fetchBookaccept } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleBookacceptPage = async ({ params }) => {
  const { id } = params;
  const bookaccept = await fetchBookaccept(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {bookaccept.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateBookaccept} className={styles.form}>
          <input type="hidden" name="id" value={bookaccept.id} />
          <label>ที่คำสั่ง</label>
          <input type="text" name="title" placeholder={bookaccept.title} />
          <label>เรื่อง</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={bookaccept.desc}
          ></textarea>
          <label>ลงวันที่</label>
          <input type="text" name="desc2" placeholder={bookaccept.desc2} />
          <label>หน่วยงาน</label>
          <input type="text" name="desc3" placeholder={bookaccept.desc3} />

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleBookacceptPage;

