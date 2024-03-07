import { updateBooksetbid } from "@/app/lib/actions";
import { fetchBooksetbid } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleBooksetbidPage = async ({ params }) => {
  const { id } = params;
  const booksetbid = await fetchBooksetbid(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {booksetbid.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateBooksetbid} className={styles.form}>
          <input type="hidden" name="id" value={booksetbid.id} />
          <label>ที่คำสั่ง</label>
          <input type="text" name="title" placeholder={booksetbid.title} />
          <label>เรื่อง</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={booksetbid.desc}
          ></textarea>
          <label>ลงวันที่</label>
          <input type="text" name="desc2" placeholder={booksetbid.desc2} />
          <label>หน่วยงาน</label>
          <input type="text" name="desc3" placeholder={booksetbid.desc3} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleBooksetbidPage;

