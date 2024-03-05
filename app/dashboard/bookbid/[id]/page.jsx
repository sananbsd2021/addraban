import { updateBookbid } from "@/app/lib/actions";
import { fetchBookbid } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleBookbidPage = async ({ params }) => {
  const { id } = params;
  const bookbid = await fetchBookbid(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {bookbid.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateBookbid} className={styles.form}>
          <input type="hidden" name="id" value={bookbid.id} />
          <label>เลขทะเบียน</label>
          <input type="text" name="title" placeholder={bookbid.title} />
          <label>ผู้รับ</label>
          <input type="text" name="desc2" placeholder={bookbid.desc2} />
          <label>หน่วยงาน</label>
          <input type="text" name="desc3" placeholder={bookbid.desc3} />
          <label>รายลเอียด</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={bookbid.desc}
          ></textarea>
          <label>ปี พ.ศ.</label>
          <input type="text" name="year" placeholder={bookbid.year} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleBookbidPage;

